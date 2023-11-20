export const shopifyExport = (products: any) => {
    // Define CSV Columns
    const csvColumns = [
        'Handle', 'Title', 'Body (HTML)', 'Vendor', 'Type', 'Tags', 'Published',
        'Option1 Name', 'Option1 Value', 'Option2 Name', 'Option2 Value',
        'Option3 Name', 'Option3 Value', 'Variant SKU', 'Variant Grams',
        'Variant Inventory Tracker', 'Variant Inventory Qty',
        'Variant Inventory Policy', 'Variant Fulfillment Service', 'Variant Price',
        'Variant Compare At Price', 'Variant Requires Shipping', 'Variant Taxable',
        'Variant Barcode', 'Image Src', 'Image Position', 'Image Alt Text',
        'Gift Card', 'SEO Title', 'SEO Description',
        'Google Shopping / Google Product Category', 'Google Shopping / [Metafields]',
        'Variant Image', 'Variant Weight Unit', 'Variant Tax Code',
        'Cost per item', 'Status'
    ];

    try {
        // Map products to Shopify format
        const shopifyProducts = products.map((product: any) => {
            return [
                '', product.title, '', '', '', '', 'published', '', '', '', '', '', '', '', '', '',
                '', '', '', '', '', '', '', product.image, '', product.title, '', product.title, '',
                '', '', '', '', '', product.price, ''
            ];
        });

        // Convert array of objects to CSV string
        const csvContent = [
            csvColumns.join(','), // Add header row
            ...shopifyProducts.map((row: any) => row.join(',')) // Add product rows
        ].join('\n');

        // Create a Blob from the CSV String
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

        // Create a link and trigger download
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "shopify_products.csv");
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return true
    } catch (error) {
        console.error(error);
        return false
    }
};

// Example usage
// shopifyExport(yourProductsArray);
