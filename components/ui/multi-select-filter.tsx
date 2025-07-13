"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface MultiSelectFilterProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelectFilter({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  className,
}: MultiSelectFilterProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (option: string) => {
    const newValue = value.includes(option) ? value.filter((v) => v !== option) : [...value, option]
    onChange(newValue)
  }

  const displayText = value.length === 0 ? placeholder : value.length === 1 ? value[0] : `${value.length} selected`

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between bg-white border-gray-300 text-gray-900 text-sm font-normal h-10 px-3 py-2 relative",
            className,
          )}
        >
          <span className="truncate text-left flex-1">{displayText}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem key={option} value={option} onSelect={() => handleSelect(option)}>
                  <Check className={cn("mr-2 h-4 w-4", value.includes(option) ? "opacity-100" : "opacity-0")} />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
