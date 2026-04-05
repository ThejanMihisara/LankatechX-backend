import ContactMessage from "../models/contactMessage.js";

export async function createContactMessage(req, res) {
	try {
		const { name, email, phone, subject, message } = req.body;

		if (!name || !email || !subject || !message) {
			return res.status(400).json({
				message: "Please fill all required fields",
			});
		}

		const newMessage = new ContactMessage({
			name,
			email,
			phone,
			subject,
			message,
		});

		await newMessage.save();

		res.status(201).json({
			message: "Message sent successfully",
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to send message",
			error: error.message,
		});
	}
}

export async function getAllContactMessages(req, res) {
	try {
		const messages = await ContactMessage.find().sort({ createdAt: -1 });

		res.status(200).json(messages);
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch contact messages",
			error: error.message,
		});
	}
}

export async function deleteContactMessage(req, res) {
	try {
		const { id } = req.params;

		await ContactMessage.findByIdAndDelete(id);

		res.status(200).json({
			message: "Message deleted successfully",
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to delete message",
			error: error.message,
		});
	}
}