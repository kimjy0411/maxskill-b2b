export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-gray-400">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="이름을 입력해 주세요"
            className="w-full rounded-xl border border-brand-card-border bg-brand-dark px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand-blue focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-gray-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            className="w-full rounded-xl border border-brand-card-border bg-brand-dark px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand-blue focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm text-gray-400">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          placeholder="문의 제목"
          className="w-full rounded-xl border border-brand-card-border bg-brand-dark px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand-blue focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="문의 내용을 입력해 주세요"
          className="w-full resize-none rounded-xl border border-brand-card-border bg-brand-dark px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand-blue focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-brand-blue py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-blue-dark"
      >
        Send
      </button>
    </form>
  );
}
