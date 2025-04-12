import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-foreground text-background">
            <div className="mx-auto w-full max-w-screen-xl px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

                    <div>
                        <h2 className="mb-4 text-lg font-bold">Social</h2>
                        <ul className="flex items-center space-x-4">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <FaFacebook className="h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <FaTwitter className="h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Master Automations. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;