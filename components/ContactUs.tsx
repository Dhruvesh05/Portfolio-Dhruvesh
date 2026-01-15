export default function ContactUs() {
	return (
		<section className="py-24 px-6 max-w-3xl mx-auto text-center bg-white dark:bg-black text-black dark:text-white">
			<h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
			<p className="opacity-70 mb-10">
				Have a project, opportunity, or just want to say hi?
			</p>

			<div className="rounded-2xl border border-black dark:border-white bg-white dark:bg-black p-8">
				<p className="text-sm opacity-70 mb-6">
					The quickest way to reach me is email.
				</p>
				<a
					href="mailto:your-email@example.com"
					className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
				>
					Send Email
				</a>
			</div>
		</section>
	);
}

