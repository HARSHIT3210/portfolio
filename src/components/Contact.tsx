"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { DialogClose } from "./ui/dialog";

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",

      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const response = await fetch("https://formspree.io/f/xpwpoyqq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    toast("Success", {
      description: "Message sent successfully.",
      duration: 4000,
    });

    if (response.ok) {
      toast("Success", {
        description: "Message sent successfully.",
        duration: 4000,
      });
      form.reset();
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Name...." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="abc@gmail.com" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message....." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button
              className="mt-3 mb-3 cursor-pointer"
              size={"sm"}
              type="submit"
            >
              Send Message
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              className="mt-3 mb-3 cursor-pointer"
              type="button"
              size={"sm"}
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
