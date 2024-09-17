import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import StarImg from "@/public/star.png";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import { HeroCarousel } from "./HeroCarousel";

export const Hero = () => {
  return (
    <div className="relative h-screen w-full pt-12 md:pt-0 overflow-hidden">
      <HeroCarousel />
      <Container className="relative z-10 flex flex-col justify-between h-full text-white">
        <div />
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Image
                key={`star${i}`}
                src={StarImg}
                alt="star"
                width={16}
                height={16}
              ></Image>
            ))}
          </div>
          <p className="text-sm text-white font-bold">25+ succesful projects</p>
        </div>
        <div>
          <h1 className="my-4">
            WE BUILD WITH <br />
            <span className="text-primary">PRECISION</span>
          </h1>
          <p className="mb-8 md:max-w-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            rerum, corporis possimus voluptates ab atque. Quos ipsa perferendis
            non molestias dignissimos, nesciunt illo iure ab nihil deserunt hic
            quam corrupti?
          </p>
          <Button />
        </div>
        <div>
            <Link href="/" className="inline-block rounded-full p-2 bg-transparent text-white border-2 border-white shadow-lg animate-bounce">
                <FaArrowDown size="24">
                </FaArrowDown>
            </Link>
        </div>
      </Container>
    </div>
  );
};
