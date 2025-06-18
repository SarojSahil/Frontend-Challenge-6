function App() {

  return (
    <main className="min-h-screen w-screen grid place-items-center bg-violet-10">
      <section className="max-w-4xl m-4 sm:m-8 px-8 py-10 sm:px-20 sm:py-14 rounded-2xl bg-white shadow-[10px_10px] shadow-violet-5">
        <h1 className="text-center text-3xl sm:text-4xl mb-4 font-medium text-neutral-900">Level Up Your Frontend Skills</h1>
        <h2 className="text-center text-xl mb-4 text-neutral-900">Sign up for our free newsletter to recieve weekly conding challenges that will help you improve your frontend development skills.</h2>
        <form>
          <div className="flex flex-col sm:flex-row gap-4 mb-3">
            <input className="w-full py-3 px-6 border border-neutral-300 bg-violet-5 text-neutral-900 rounded-md placeholder:text-xl text-xl" type="email" name="email" id="email" placeholder="Enter email address" />
            <button className="sm:grow-0 sm:min-w-[8rem] py-3 rounded-md bg-neutral-900 text-white text-xl">Subscribe</button>
          </div>
          <div className="flex gap-x-3">
            <input className="w-4 h-4 shrink-0 mt-1 accent-neutral-900" type="checkbox" name="terms" id="terms" />
            <label className="text-neutral-900" htmlFor="terms">By checking this box you agree to recieve our weekly newletter containing coding challenges, tips and other related content. You may unsubscribe the newsletter at any time.</label>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App
