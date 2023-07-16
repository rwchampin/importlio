"use client";
import React, { Suspense } from 'react';
import { useGLTF, Preload } from '@react-three/drei';

const M = ({ url }) => {
  const { scene } = useGLTF(url);

  return <primitive object={scene} />;
};

const Model = ({ url }) => {
  return (
    <Suspense fallback={null}>
      <Preload all>
        <M url={url} />
      </Preload>
    </Suspense>
  );
};

export default Model;
