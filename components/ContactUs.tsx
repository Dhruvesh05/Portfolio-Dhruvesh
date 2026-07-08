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
		const mailtoLink = `mailto:dhruveshpatil7777@gmail.com?subject=${encodeURIComponent(
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
		<section className="min-h-screen py-16 md:py-24 px-4 md:px-6 bg-white dark:bg-black text-black dark:text-white">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-16 md:mb-20">
					<h1 className="text-5xl font-black tracking-tight mb-6 sm:text-6xl md:text-7xl lg:text-8xl">
						Get In Touch
					</h1>
					<p className="text-lg md:text-xl opacity-70 max-w-3xl mx-auto">
						Have a project in mind or just want to connect? I&apos;d love to hear from you. 
						Drop me a message and let&apos;s create something amazing together!
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
					{/* Left Side - Contact Form */}
					<div className="border-2 border-black dark:border-white p-6 md:p-8 lg:p-10">
						<h2 className="text-2xl md:text-3xl font-semibold mb-8">Send a Message</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-semibold mb-2">
									Your Name *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition"
									placeholder="John Doe"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-semibold mb-2">
									Email Address *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition"
									placeholder="john@example.com"
								/>
							</div>

							<div>
								<label htmlFor="subject" className="block text-sm font-semibold mb-2">
									Subject *
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition"
									placeholder="Project Collaboration"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-semibold mb-2">
									Message *
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={6}
									className="w-full px-4 py-3 border-2 border-black dark:border-white bg-transparent focus:outline-none focus:border-black dark:focus:border-white transition resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>

							<button
								type="submit"
								className="w-full py-4 bg-black text-white dark:bg-white dark:text-black font-bold text-lg hover:opacity-80 transition border-2 border-black dark:border-white"
							>
								Send Message →
							</button>
						</form>
					</div>

					{/* Right Side - Contact Information */}
					<div className="space-y-6">
						{/* Email */}
						<div className="border-2 border-black dark:border-white p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-black dark:border-white bg-black dark:bg-white flex items-center justify-center shrink-0">
									<svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<h3 className="font-bold text-xl mb-2">Email</h3>
									<a
										href="mailto:dhruveshpatil7777@gmail.com"
										className="opacity-80 hover:opacity-100 transition break-all text-sm md:text-base"
									>
										dhruveshpatil7777@gmail.com
									</a>
								</div>
							</div>
						</div>

						{/* Availability */}
						<div className="border-2 border-black dark:border-white p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-black dark:border-white bg-black dark:bg-white flex items-center justify-center shrink-0">
									<svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
								</div>
								<div>
									<h3 className="font-bold text-xl mb-3">Currently Available For</h3>
									<ul className="space-y-2 text-sm md:text-base opacity-90">
										<li>→ Freelance Projects</li>
										<li>→ Full-time Opportunities</li>
										<li>→ Internships</li>
										<li>→ Collaborations</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Response Time */}
						<div className="border-2 border-black dark:border-white p-6 md:p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-black dark:border-white bg-black dark:bg-white flex items-center justify-center shrink-0">
									<svg className="w-6 h-6 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
									</svg>
								</div>
								<div>
									<h3 className="font-bold text-xl mb-2">Response Time</h3>
									<p className="opacity-90 text-sm md:text-base">
										I typically respond within 24-48 hours. Looking forward to connecting with you!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Social Links Section */}
				<div className="border-2 border-black dark:border-white p-8 md:p-12 mb-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Connect With Me</h2>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
						<a
							href="https://github.com/Dhruvesh05"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-2 group"
						>
							<div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</div>
							<span className="font-semibold">GitHub</span>
						</a>
						<a
							href="https://linkedin.com/in/dhruvesh-patil-a31917280"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-2 group"
						>
							<div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</div>
							<span className="font-semibold">LinkedIn</span>
						</a>
						<a
							href="mailto:dhruveshpatil7777@gmail.com"
							className="flex flex-col items-center gap-2 group"
						>
							<div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
								</svg>
							</div>
							<span className="font-semibold">Gmail</span>
						</a>
						<a
							href="https://instagram.com/dhruvesh810220"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-2 group"
						>
							<div className="w-16 h-16 rounded-full border-2 border-black dark:border-white flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
								<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
								</svg>
							</div>
							<span className="font-semibold">Instagram</span>
						</a>
					</div>
				</div>

				{/* Direct Email CTA */}
				<div className="border-2 border-black dark:border-white p-8 md:p-12 text-center bg-black dark:bg-white text-white dark:text-black">
					<h2 className="text-2xl md:text-3xl font-semibold mb-4">
						Prefer Email?
					</h2>
					<p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
						Skip the form and reach out directly to my inbox
					</p>
					<a
						href="mailto:dhruveshpatil7777@gmail.com"
						className="inline-block px-8 py-4 bg-white text-black dark:bg-black dark:text-white font-bold text-lg hover:opacity-80 transition border-2 border-white dark:border-black"
					>
						Open Email Client →
					</a>
				</div>
			</div>
		</section>
	);
}

