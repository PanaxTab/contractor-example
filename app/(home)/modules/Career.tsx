import { Button } from "@/components/Button";
import Image from "next/image";
import { Container } from "@/components/Container";
import React from "react";
import { SectionName } from "../../../components/SectionName";

export const Career = () => {
  return (
    <section>
      <Container>
        <SectionName name="career" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-4">JOIN OUR TEAM!</h2>
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full mb-4 md:hidden"
            />
            <div className="space-y-4">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  alias, eum inventore nisi natus tempore pariatur ipsam totam ipsum
                  blanditiis dolor officiis facere illum fuga nihil similique cum
                  error? Dignissimos?
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  alias, eum inventore nisi natus tempore pariatur ipsam totam ipsum
                  blanditiis dolor officiis facere illum fuga nihil similique cum
                  error? Dignissimos?
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                  alias, eum inventore nisi natus tempore pariatur ipsam totam ipsum
                  blanditiis dolor officiis facere illum fuga nihil similique cum
                  error? Dignissimos?
                </p>
          </div>
            <Button />
          </div>

          <div className="relative hidden md:block">
            <Image
              src="/worker.jpg"
              alt="worker"
              sizes="100vw"
              width={0}
              height={0}
              className="h-auto w-full"
            />
            <Image
              src="/dots.png"
              alt="dots"
              width={200}
              height={200}
              className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
