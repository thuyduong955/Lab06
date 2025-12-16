// pages/docs/[slug].js
// This page renders markdown docs based on the slug param.
// It uses getStaticPaths and getStaticProps for SSG.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

export async function getStaticPaths() {
  // Get all markdown files in docs folder
  const docsDir = path.join(process.cwd(), 'ex13_knowledge_base', 'docs');
  const files = fs.readdirSync(docsDir);
  const paths = files.map(file => ({
    params: { slug: file.replace(/\.md$/, '') }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'ex13_knowledge_base', 'docs', params.slug + '.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  return {
    props: {
      content,
      title: data.title || params.slug
    }
  };
}

export default function DocPage({ title, content }) {
  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: 20 }}>
      <h1>{title}</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{content}</pre>
    </div>
  );
}
