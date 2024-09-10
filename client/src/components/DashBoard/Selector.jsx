import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
// import { toast } from ""
import { Button } from "../ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover"

const frequencies = [
    { label: "Once a day", value: "once_a_day" },
    { label: "Twice a day", value: "twice_a_day" },
    { label: "Three times a day", value: "three_times_a_day" },
    { label: "Every 4 hours", value: "every_4_hours" },
    { label: "Every 6 hours", value: "every_6_hours" },
    { label: "Every 8 hours", value: "every_8_hours" },
    { label: "Every 12 hours", value: "every_12_hours" },
    { label: "As needed", value: "as_needed" },
  ]
  

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select frequency.",
  }),
})

export function ComboboxForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="default"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? frequencies.find(
                            (language) => language.value === field.value
                          )?.label
                        : "Select frequency"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandList>
                      <CommandEmpty>No frequency found.</CommandEmpty>
                      <CommandGroup>
                        {frequencies.map((language) => (
                          <CommandItem
                            value={language.label}
                            key={language.value}
                            onSelect={() => {
                              form.setValue("language", language.value)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                language.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {language.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
