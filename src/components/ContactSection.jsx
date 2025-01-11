import { FaHandshake } from "react-icons/fa"; // Handshake icon
import { Mail, MessageCircle } from "lucide-react"; // Email and WhatsApp icons

function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center border relative w-full rounded-t-[100px]">
      {/* Handshake Icon */}
      <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full mb-6">
        <FaHandshake className="text-gray-800 w-10 h-10 shadow" />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">
        Get In touch <span className="bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent">with me</span>
      </h2>

      {/* Buttons */}
      <div className="flex space-x-4">
        {/* Email Button */}
        <a
          href="mailto:eayeni185@gmail.com"
          className="flex items-center px-6 py-4 underline bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800"
        >
          <Mail className="w-4 h-4 mr-2" />
          Email Me
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/message/J72ZSVAOHGWSM1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 py-4 bg-white text-black border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        <p>EmmyCodes © 2024 All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://linkedin.com/in/emmanuel-ayeni01"
            className="hover:underline hover:text-gray-700"
          >
            LinkedIn
          </a>
          <span>/</span>
          <a
            href="https://wa.me/message/J72ZSVAOHGWSM1"
            className="hover:underline hover:text-gray-700"
          >
            WhatsApp
          </a>
          <span>/</span>
          <a
            href="/"
            className="hover:underline hover:text-gray-700"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ContactSection;
