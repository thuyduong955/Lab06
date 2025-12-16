// ex12_optimize/pages/index.js
// This page shows a big image using <img> and next/image for comparison.
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Image & Font Optimization Demo</h1>
      {/* Standard img tag - will cause layout shift */}
      <h2>Standard &lt;img&gt; tag</h2>
      <img src="/big.jpg" alt="Big" style={{ width: 600 }} />
      {/* next/image - prevents layout shift, lazy loads, uses modern formats */}
      <h2>next/image component</h2>
      <Image src="/big.jpg" alt="Big" width={600} height={400} placeholder="blur" />
      <p>Notice: No layout shift with next/image!</p>
    </div>
  );
}
