import type { MDXComponents } from 'mdx/types'
 
const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ children }) => (
    <h1 style={{ color: 'white', fontSize: '48px' }}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 style={{ color: 'white', fontSize: '36px' }}>{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 style={{ color: 'white', fontSize: '24px' }}>{children}</h3>
  ),
  hr: () => <hr style={{ border: 'darkgray solid 0.5px', margin: '10px -10px ' }} />,
} satisfies MDXComponents
 
export function useMDXComponents(): MDXComponents {
  return components
}