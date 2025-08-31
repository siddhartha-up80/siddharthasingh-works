"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Link from "next/link";
import Image from "next/image";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MoreVerticalIcon,
  Share,
  Share2Icon,
  TwitterIcon,
} from "lucide-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import {
  AnimatedModal,
  AnimatedModalContent,
  AnimatedModalFooter,
} from "../ui/animated-modal";
import { useState } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { ToastContainer, toast } from "react-toastify";

export function HeroContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const avatarUrl = "/images/siddharthacircle.png";
  const socialButtons = [
    {
      label: "Share",
      image: "/images/share.png",
      profileName: "Share",
      profileImage: "/images/siddharthacircle.png",
      onClick: () => {
        navigator.clipboard.writeText("https://siddharthasingh.co.in");
        toast("Link copied to clipboard!");
      },

      button: false,
    },
    {
      label: "Instagram",
      image: "/images/instagram.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "sid_up80",
      onClick: () =>
        window.open("https://www.instagram.com/sid_up80", "_blank"),
      button: true,
    },
    {
      label: "Github",
      image: "/images/github.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "siddhartha-up80",
      onClick: () =>
        window.open("https://github.com/siddhartha-up80", "_blank"),
      button: true,
    },
    {
      label: "Twitter",
      image: "/images/x.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "siddhartha_up80",
      onClick: () =>
        window.open("https://twitter.com/siddhartha_up80", "_blank"),
      button: true,
    },
    {
      label: "Linkedin",
      image: "/images/linkedin.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "siddhartha-singh-work",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/siddhartha-singh-work",
          "_blank"
        ),
      button: true,
    },
    {
      label: "Email",
      image: "/images/email.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "siddhartha.singh3093@gmail.com",
      onClick: () =>
        window.open("mailto:siddharthasingh3093@gmail.com", "_blank"),
      button: true,
    },
    {
      label: "Portfolio",
      image: "/images/terminal.png",
      profileImage: "/images/siddharthacircle.png",
      profileName: "https://siddharthasingh.co.in/portfolio",
      onClick: () =>
        window.open("https://siddharthasingh.co.in/portfolio", "_blank"),
      button: true,
    },
  ];

  return (
    <section className="">
      <button
        className="dark:bg-white bg-black rounded-full p-2 fixed top-14 z-50 md:right-10 right-5"
        title="share"
        onClick={() => {
          setIsModalOpen(true);
          setModalContent("https://siddharthasingh.co.in");
          navigator.clipboard.writeText("https://siddharthasingh.co.in");
          toast("Link copied to clipboard!");
        }}
      >
        <Share2Icon size={25} className="dark:text-black text-white" />
      </button>

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="px-4 font-bold text-neutral-700 dark:text-white flex-col flex md:gap-4 gap-2 text-center mx-auto"
      >
        <motion.div
          className="flex items-center justify-center h-max"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            height={1000}
            width={1000}
            src="/images/siddharthacircle.png"
            alt="Portfolio Image"
            className="object-contain w-[20vh] "
          />
        </motion.div>
        <Highlight className="text-black dark:text-white md:px-5 w-max mx-auto">
          <span className="font-semibold text-xl">Siddhartha Singh</span>
        </Highlight>
        <span className="font-semibold -mt-2">
          Follow me on all social media platforms
        </span>

        {/* <span className=" font-normal">
          <TextGenerateEffect
            words={`
                Follow me on Instagram, Github, Twitter & Linkedin
              `}
            filter={false}
            duration={3}
          />
        </span> */}
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 3,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="w-full mt-10"
      >
        <div
          className="
        flex
        flex-wrap
        gap-4
        md:gap-6
        lg:gap-8
        mx-auto
        w-full
        max-w-screen-lg
        justify-center
        "
        >
          {socialButtons.map((link, index) => (
            <>
              {link.button && (
                <div
                  className="cursor-pointer group !z-[1000] relative inline-flex h-[calc(48px+8px)] w-[80vw] bg-gradient-to-r dark:from-[#410707] dark:to-[#571414] from-[#ffc0c0] to-[#ff4c4c] border-2 border-[#e26565] items-center justify-center rounded-full py-1 pl-6 pr-14 font-medium text-neutral-50  md:w-[calc(33.333%-100px)]"
                  onClick={link.onClick}
                >
                  <div className="absolute left-1 inline-flex h-12 w-12 items-center justify-center rounded-full dark:bg-white bg-white ">
                    <div className=" flex items-center justify-center">
                      <Image
                        src={link.image}
                        alt={link.label}
                        className="rounded-full size-10"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <span className="z-10 pr-2">{link.label}</span>
                  <div
                    className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full dark:bg-[#e75050] bg-[#a02b2b] transition-[width] group-hover:w-[calc(100%-8px)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="mr-3.5 flex items-center justify-center">
                      <div
                        onClick={() => {
                          setIsModalOpen(true);
                          setModalContent(link.profileName);
                        }}
                      >
                        <MoreVerticalIcon className="size-4" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </motion.div>

      {isModalOpen && (
        <AnimatedModal
          open={isModalOpen}
          onOpenChange={(val) => {
            setIsModalOpen(val);
            setModalContent(null);
          }}
        >
          <AnimatedModalContent className="min-w-[40vw]">
            <div className="flex flex-col items-center gap-4 py-6 bg-red-900 rounded-2xl">
              <Avatar className="h-24 w-24">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white">
                  Siddhartha Singh
                </h3>
                <p className="text-sm text-muted-foreground text-white">
                  {modalContent}
                </p>
              </div>
            </div>

            <div className="flex mt-10 gap-6 flex-wrap w-full mx-auto justify-center items-center py-4">
              {socialButtons.map((button) => (
                <button
                  className="flex items-center flex-col"
                  onClick={button.onClick}
                >
                  <Image
                    src={button.image}
                    alt={button.label}
                    className=" rounded-2xl size-14 bg-white dark:bg-white p-1"
                    width={100}
                    height={100}
                  />
                  {button.label}
                </button>
              ))}
            </div>
          </AnimatedModalContent>
        </AnimatedModal>
      )}
    </section>
  );
}
