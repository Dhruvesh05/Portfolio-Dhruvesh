export default function ContactUs() {
	return (
		<section className="py-24 px-6 max-w-3xl mx-auto text-center">
			<h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Work Together</h2>
			<p className="text-gray-600 dark:text-[#9CA3AF] mb-10">
				Have a project, opportunity, or just want to say hi?
			</p>

			<div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#111827] p-8">
				<p className="text-sm text-gray-600 dark:text-[#9CA3AF] mb-6">
					The quickest way to reach me is email.
				</p>
				<a
					href="mailto:your-email@example.com"
					className="inline-block px-8 py-3 rounded-full bg-[#38BDF8] text-white hover:bg-[#38BDF8]/80 transition"
				>
					Send Email
				</a>
			</div>
		</section>
	);
}

