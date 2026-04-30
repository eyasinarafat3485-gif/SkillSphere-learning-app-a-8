import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    // এখানে bg-[#0a0202] এর সাথে একটি খুব সূক্ষ্ম লালচে আভা (Reddish tint) দেওয়া হয়েছে যা প্রফেশনাল দেখায়
    <footer className="bg-[#485966] text-gray-400 py-10 border-t border-red-900/30">
      <div className="max-w-7xl mx-auto px-5 md:px-15 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-red-500 text-lg font-semibold uppercase tracking-widest">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white text-gray-300 transition-colors">Email: support@skillsphere.com</li>
            <li className="hover:text-white text-gray-300  transition-colors">Phone: +880 1234-567890</li>
            <li className="hover:text-white text-gray-300  transition-colors">Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start md:items-center space-y-4">
          <h3 className="text-red-500 text-lg font-semibold uppercase tracking-widest">Social Links</h3>
          <div className="flex gap-6 text-2xl">
            <Link href="/" className="text-gray-300  hover:text-red-500 transition-all duration-300 transform hover:-translate-y-1"><FaFacebook /></Link>
            <Link href="/" className=" text-gray-300 hover:text-red-400 transition-all duration-300 transform hover:-translate-y-1"><FaTwitter /></Link>
            <Link href="/" className="text-gray-300 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1"><FaLinkedin /></Link>
            <Link href="/" className=" text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"><FaGithub /></Link>
          </div>
        </div>

        {/* Legal */}
        <div className="md:text-right space-y-4">
          <h3 className="text-red-500 text-lg font-semibold uppercase tracking-widest">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-5 mt-12 pt-6 border-t border-red-900/20 text-center text-[10px] uppercase tracking-[0.2em] text-gray-500">
        <p className='text-gray-300'>&copy; {new Date().getFullYear()} <span className="text-red-900">SkillSphere</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;