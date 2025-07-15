"use client"

import * as React from "react"
import { Check, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface MultiSelectFilterProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  className?: string
}

export function MultiSelectFilter({
  options,
  selected,
  onChange,
  placeholder = "Select options...",
  className,
}: MultiSelectFilterProps) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value))
    } else {
      onChange([...selected, value])
    }
  }

  const handleRemove = (value: string) => {
    onChange(selected.filter((item) => item !== value))
  }

  const handleClear = () => {
    onChange([])
  }

  return (
    <div className={cn("relative", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="flex gap-4 text-base rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <div className="flex gap-1 flex-1">
              {selected.length === 0 ? (
                <span className="text-gray-900 text-sm truncate">{placeholder}</span>
              ) : (
                <>
                  {selected.slice(0, 2).map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="text-xs px-2 py-0.5 bg-blue-100 text-blue-800 hover:bg-blue-200"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRemove(item)
                      }}
                    >
                      {item}
                      <X className="ml-1 h-3 w-3 cursor-pointer" />
                    </Badge>
                  ))}
                  {selected.length > 2 && (
                    <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600">
                      +{selected.length - 2} more
                    </Badge>
                  )}
                </>
              )}
            </div>
            <div className="flex gap-1">
              {selected.length > 0 && (
                <X
                  className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleClear()
                  }}
                />
              )}
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search..." className="h-9" />
            <CommandList>
              <CommandEmpty>No options found.</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    onSelect={() => handleSelect(option)}
                    className="cursor-pointer"
                  >
                    <Check className={cn("mr-2 h-4 w-4", selected.includes(option) ? "opacity-100" : "opacity-0")} />
                    {option}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
