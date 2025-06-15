
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { useTranslation } from "react-i18next"

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("validation_name_min"),
    }),
    email: z.string().email({
      message: t("validation_email_invalid"),
    }),
    message: z.string().min(10, {
      message: t("validation_message_min"),
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xdkzzelj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast({
          title: t("contact_form_toast_success_title"),
          description: t("contact_form_toast_success_description"),
        });
        form.reset();
        if (onSuccess) {
          onSuccess();
        }
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t("contact_form_toast_error_title"),
        description: t("contact_form_toast_error_description"),
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact_form_name_label")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contact_form_name_placeholder")} {...field} />
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
              <FormLabel>{t("contact_form_email_label")}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t("contact_form_email_placeholder")} {...field} />
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
              <FormLabel>{t("contact_form_message_label")}</FormLabel>
              <FormControl>
                <Textarea placeholder={t("contact_form_message_placeholder")} className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full text-lg" disabled={isLoading}>
          {isLoading ? t("contact_form_button_sending") : t("contact_form_button_send")}
        </Button>
      </form>
    </Form>
  )
}
