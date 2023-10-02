"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

type EmailSignInProps = {
  children: React.ReactNode;
};

function EmailSignIn({ children }: EmailSignInProps) {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // const loginWithEmail = () =>
    //   signIn("email", {
    //     email: data.email,
    //     callbackUrl: "/admin",
    //   });
    const signInData = await signIn("email", {
      email: data.email,

      callbackUrl: "/admin",
    });
    console.log(signInData);

    if (signInData?.error) {
      toast({
        title: "Error",
        description: "Oops Something went wrong",
        variant: "destructive",
      });
    } else {
      router.refresh();
      router.push("/admin");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="mail@example.com" type="email" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-6" type="submit">
          {children}
        </Button>
      </form>
    </Form>
  );
}

export default EmailSignIn;
