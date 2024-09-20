import React from 'react'
import Image from 'next/image'
import Award from "@/public/award.png"
import {Badge} from "@/components/Badge"

export const ContactDetails = () => {
  return (
    <div>
      <div className="relative w-24 h-24">
          <Image
              src={Award}
              alt="award"
              sizes="100vw"
              fill
              className="object-cover rounded-full"
          />
        </div>
          <h2 className="my-4">
              Contact Us
          </h2>
          <p className="text-lg mb-4">
              We are here to help you with your project. Contact Us for a peronalized offer.
              <br/>
              <br/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis eius maxime adipisci esse, sunt, officiis id ut vero, repudiandae voluptas temporibus numquam neque.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sit natus quibusdam, ad illo a fuga.
          </p>
          
          <Badge />
      </div>
  );
};
