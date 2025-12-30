import Plan from './page.mdx'

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] font-sans dark:bg-black">
      <main className="flex min-h-screen w-3/4 max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <article className="prose prose-lg prose-zinc dark:prose-invert">
          <Plan />
        </article>
      </main>
    </div>
  )
}