"use client";

import { useState } from "react";

export default function ContactUs() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Create mailto link with form data
		const mailtoLink = `mailto:dhruvnagar1211@gmail.com?subject=${encodeURIComponent(
			formData.subject
		)}&body=${encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
		)}`;
		window.location.href = mailtoLink;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 max-w-7xl mx-auto bg-white dark:bg-black text-black dark:text-white">
			<div className="text-center mb-12 md:mb-16">
				<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
					Let&apos;s Work Together
				</h2>
				<p className="text-base md:text-lg opacity-70 max-w-2xl mx-auto">
					Have a project in mind, looking to collaborate, or just want to connect? I&apos;d love to hear from you!
				</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
				{/* Contact Form */}
				<div className="order-2 md:order-1">
					<h3 className="text-2xl md:text-5xl font-bold mb-6 text-center md:text-left">Send a Message</h3>
					<form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
								placeholder="John Doe"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
								placeholder="john@example.com"
							/>
						</div>

						<div>
							<label htmlFor="subject" className="block text-sm font-medium mb-2">
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
								placeholder="Project Collaboration"
							/>
						</div>

						<div>
							<label htmlFor="message" className="block text-sm font-medium mb-2">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={6}
								className="w-full px-4 py-3 border border-black dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none"
								placeholder="Tell me about your project..."
							/>
						</div>

						<button
							type="submit"
							className="w-full py-3 md:py-4 bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition border border-black dark:border-white"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Info */}
				<div className="order-1 md:order-2">
					<h3 className="text-5xl md:text-5xl font-bold mb-6 text-center md:text-left">Get In Touch</h3>
					
					<div className="space-y-6 md:space-y-8">
						{/* Email */}
						<div className="border border-black dark:border-white p-6">
							<h4 className="font-bold mb-2 text-lg">Email</h4>
							<a
								href="mailto:dhruvneshpatil7777@gmail.com"
								className="opacity-70 hover:opacity-100 transition break-all"
							>
								dhruvneshpatil7777@gmail.com
							</a>
						</div>

						{/* Social Links */}
						<div className="border border-black dark:border-white p-6">
							<h4 className="font-bold mb-4 text-lg">Connect With Me</h4>
							<div className="grid grid-cols-2 gap-3">
								<a
									href="https://github.com/Dhruvesh05"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-black dark:border-white py-2.5 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm"
								>
									GitHub
								</a>
								<a
									href="https://linkedin.com/in/dhruvesh-patil-a31917280"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-black dark:border-white py-2.5 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm"
								>
									LinkedIn
								</a>
								<a
									href="https://twitter.com/yourusername"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-black dark:border-white py-2.5 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm"
								>
									Twitter
								</a>
								<a
									href="https://instagram.com/dhruvesh810220"
									target="_blank"
									rel="noopener noreferrer"
									className="border border-black dark:border-white py-2.5 text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition text-sm"
								>
									Instagram
								</a>
							</div>
						</div>

						{/* Availability */}
						<div className="border border-black dark:border-white p-6">
							<h4 className="font-bold mb-2 text-lg">Availability</h4>
							<p className="opacity-70 mb-3">Currently available for:</p>
							<ul className="space-y-2 text-sm opacity-70">
								<li>• Freelance Projects</li>
								<li>• Full-time Opportunities</li>
								<li>• Internships</li>
								<li>• Collaborations</li>
							</ul>
						</div>

						{/* Response Time */}
						<div className="border border-black dark:border-white p-6">
							<h4 className="font-bold mb-2 text-lg">Response Time</h4>
							<p className="opacity-70">
								I typically respond within 24-48 hours. Looking forward to connecting with you!
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Quick Contact CTA */}
			<div className="mt-12 md:mt-16 text-center">
				<div className="border border-black dark:border-white p-8 md:p-12 max-w-4xl mx-auto">
					<h3 className="text-xl md:text-2xl font-bold mb-4">
						Prefer a Direct Email?
					</h3>
					<p className="opacity-70 mb-6">
						Skip the form and reach out directly
					</p>
					<a
						href="mailto:dhruvnagar1211@gmail.com"
						className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold hover:opacity-90 transition border border-black dark:border-white"
					>
						Open Email Client
					</a>
				</div>
			</div>
		</section>
	);
}

