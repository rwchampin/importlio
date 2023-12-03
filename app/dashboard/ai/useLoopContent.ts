'use client'
import { useEffect, useState } from 'react';

export const useLoopContent = () => {
  const MAX_TOKENS = 2048;
  const [initialHtmlString, setInitialHtmlString] = useState<string>('');
  const [sections, setSections] = useState<any[]>([]);
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  function getSections(htmlString: string) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    const topLevelElements: any[] = [];

    // Define a recursive function to traverse the DOM tree
    function traverse(element: any) {
      const children = Array.from(element.children);

      if (children.length === 1) {
        // If there's only one child, continue recursively
        traverse(children[0]);
      } else {
        // If there are multiple children, add the current element to the top-level elements
        topLevelElements.push(element);
      }
    }

    // Start the traversal from the temporary div
    traverse(tempDiv);

    return topLevelElements;
  }

  const tooManyTokens = (text: string) => {
    const chars = text.split('');
    return ((chars.length / 3) * 2) >= MAX_TOKENS;
  };

  const splitHTMLStringWithChildren = (htmlString: string) => {
    const chunks = [];
    let remainingHTML = htmlString;

    while (remainingHTML.length > MAX_TOKENS) {
      // Check for HTML child elements within the child
      const childMatch = /<\/?(.*?)>/g.exec(remainingHTML);

      if (childMatch && childMatch.index < MAX_TOKENS) {
        // Split the HTML string at the closing tag of the first child element
        const childElement = childMatch[0];
        chunks.push(remainingHTML.substring(0, childMatch.index + childElement.length));
        remainingHTML = remainingHTML.substring(childMatch.index + childElement.length);
      } else {
        // Find a suitable break in the inner text (e.g., space)
        const splitPosition = remainingHTML.lastIndexOf(' ', MAX_TOKENS);

        if (splitPosition === -1) {
          // If no suitable split position is found, split at the maximum character limit
          chunks.push(remainingHTML.substring(0, MAX_TOKENS));
          remainingHTML = remainingHTML.substring(MAX_TOKENS);
        } else {
          // Split the HTML string at the found position
          chunks.push(remainingHTML.substring(0, splitPosition));
          remainingHTML = remainingHTML.substring(splitPosition + 1);
        }
      }
    }

    // Add the remaining HTML as the last chunk
    chunks.push(remainingHTML);

    return chunks;
  };

  useEffect(() => {
    if(initialHtmlString.length === 0) return;
    // create sections
    let sections = getSections(initialHtmlString);

    // manipulate the sections that are too long
    sections = sections.map((section: any) => {
      if (tooManyTokens(section.outerHTML)) {
        return splitHTMLStringWithChildren(section.outerHTML);
      }
      return section;
    });

    setSections(sections);
  }, [initialHtmlString]);

  return {
    setInitialHtmlString,
    sections,
    sectionIndex,
    setSectionIndex,
  };
};
