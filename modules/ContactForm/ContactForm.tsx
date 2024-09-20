"use client";

import React from 'react'
import {Input} from "@/components/Input"
import {Button} from "@/components/Button"
import { useFormState, useFormStatus } from 'react-dom';
import { sendForm } from '@/actions/resend';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';

export const ContactForm = () => {
const [state,formAction] = useFormState(sendForm,
  {
    message:"",
  });
  
  return (
    <form 
      className='space-y-6 bg-white text-black p-8 rounded-lg'
      action={formAction}
      >
      <div className='space-y-2'>
        <p className="text-base font-extrabold ">
          Name:
        </p>
        <Input name="name" type="text" required/>
      </div>

      <div className='space-y-2'>
        <p className="text-base font-extrabold ">
          Email:
        </p>
        <Input name="email" type="text" required/>
      </div>
      <div className='space-y-2'>
        <p className="text-base font-extrabold ">
          Phone:
        </p>
        <Input name="phone" type="text" required/>
      </div>
      <div className='space-y-2'>
        <p className="text-base font-extrabold ">
          Message:
        </p>
        <textarea
          className="w-full bg-neutral-100 p-3 rounded-lg focus:outline"
          required
          name="message"
        />
      </div>
      <div className='flex justify-center'>
        <SubmitButton />
      </div>
      {state?.message === "success"&&(
        <div className="flex items-center space-x-2 text-green-500">
          <BiCheckCircle color="green"/>
          <p aria-live="polite" className="text-base no-sr-only">
            Your Message has been successfully delivered
          </p>
        </div>
      )}
      {state?.message === "error"&&(
        <div className="flex items-center space-x-2 text-red-500">
          <BiErrorCircle color="red"/>
          <p aria-live="polite" className="text-base no-sr-only">
            An error occured while sending your message
          </p>
        </div>
      )}
    </form>
  );
};


const SubmitButton = () => {
  const {pending:isPending} = useFormStatus();

  return <Button type="submit">{isPending ? "Sending" : "Send"}</Button>
}

