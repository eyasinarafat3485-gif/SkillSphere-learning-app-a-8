import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-5 md:px-15 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@skillsphere.com</li>
            <li>Phone: +880 1234-567890</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">Social Links</h3>
          <div className="flex gap-5 text-2xl">
            <Link href="/" className="hover:text-blue-500 transition-colors"><FaFacebook /></Link>
            <Link href="/" className="hover:text-blue-400 transition-colors"><FaTwitter /></Link>
            <Link href="/" className="hover:text-blue-600 transition-colors"><FaLinkedin /></Link>
            <Link href="/" className="hover:text-white transition-colors"><FaGithub /></Link>
          </div>
        </div>

        <div className="md:text-right">
          <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wider">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-red-500 transition-colors">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 mt-10 pt-5 border-t border-gray-800 text-center text-xs uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} SkillSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;