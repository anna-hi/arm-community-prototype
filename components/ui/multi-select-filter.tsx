"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export interface FilterOption {
  value: string
  label: string
  description?: string
}

export interface FilterCategory {
  title: string
  options: FilterOption[]
}

interface MultiSelectFilterProps {
  title: string
  placeholder: string
  options?: FilterOption[]
  categories?: FilterCategory[]
  value: string[]
  onValueChange: (value: string[]) => void
  multiColumn?: boolean
  showSelectAll?: boolean
  className?: string
}

export function MultiSelectFilter({
  title,
  placeholder,
  options,
  categories,
  value,
  onValueChange,
  multiColumn = false,
  showSelectAll = false,
  className,
}: MultiSelectFilterProps) {
  const [open, setOpen] = React.useState(false)

  const allOptions = React.useMemo(() => {
    if (options) return options
    if (categories) return categories.flatMap((cat) => cat.options)
    return []
  }, [options, categories])

  const handleSelectAll = () => {
    if (value.length === allOptions.length) {
      onValueChange([])
    } else {
      onValueChange(allOptions.map((option) => option.value))
    }
  }

  const handleToggle = (optionValue: string) => {
    const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue]
    onValueChange(newValue)
  }

  const renderOptions = () => {
    if (options) {
      return (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-start space-x-2">
              <Checkbox
                id={`${title}-${option.value}`}
                checked={value.includes(option.value)}
                onCheckedChange={() => handleToggle(option.value)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <label
                  htmlFor={`${title}-${option.value}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {option.label}
                </label>
                {option.description && <p className="text-xs text-gray-500 mt-1 italic">{option.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (categories) {
      if (multiColumn) {
        // Two-column layout for knowledgeable skills
        const leftCategories = categories.slice(0, Math.ceil(categories.length / 2))
        const rightCategories = categories.slice(Math.ceil(categories.length / 2))

        return (
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              {leftCategories.map((category, categoryIndex) => (
                <div key={`left-${categoryIndex}`}>
                  {category.title && <h4 className="font-semibold text-sm text-gray-900 mb-2">{category.title}</h4>}
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <div key={option.value} className="flex items-start space-x-2">
                        <Checkbox
                          id={`${title}-${option.value}`}
                          checked={value.includes(option.value)}
                          onCheckedChange={() => handleToggle(option.value)}
                          className="mt-0.5"
                        />
                        <label
                          htmlFor={`${title}-${option.value}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {rightCategories.map((category, categoryIndex) => (
                <div key={`right-${categoryIndex}`}>
                  {category.title && <h4 className="font-semibold text-sm text-gray-900 mb-2">{category.title}</h4>}
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <div key={option.value} className="flex items-start space-x-2">
                        <Checkbox
                          id={`${title}-${option.value}`}
                          checked={value.includes(option.value)}
                          onCheckedChange={() => handleToggle(option.value)}
                          className="mt-0.5"
                        />
                        <label
                          htmlFor={`${title}-${option.value}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }

      // Single column layout
      return (
        <div className="space-y-4">
          {categories.map((category, categoryIndex) => (
            <div key={`category-${categoryIndex}`}>
              {category.title && <h4 className="font-semibold text-sm text-gray-900 mb-2">{category.title}</h4>}
              <div className="space-y-2">
                {category.options.map((option) => (
                  <div key={option.value} className="flex items-start space-x-2">
                    <Checkbox
                      id={`${title}-${option.value}`}
                      checked={value.includes(option.value)}
                      onCheckedChange={() => handleToggle(option.value)}
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <label
                        htmlFor={`${title}-${option.value}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {option.label}
                      </label>
                      {option.description && <p className="text-xs text-gray-500 mt-1 italic">{option.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
              {categoryIndex < categories.length - 1 && <Separator className="mt-3" />}
            </div>
          ))}
          {showSelectAll && (
            <>
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`${title}-select-all`}
                  checked={value.length === allOptions.length}
                  onCheckedChange={handleSelectAll}
                />
                <label htmlFor={`${title}-select-all`} className="text-sm font-medium leading-none cursor-pointer">
                  Select All
                </label>
              </div>
            </>
          )}
        </div>
      )
    }

    return null
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between bg-white border-gray-300 hover:bg-gray-50", className)}
        >
          <span className="truncate">{value.length > 0 ? `${value.length} selected` : placeholder}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white border border-gray-200 shadow-lg" align="start">
        {renderOptions()}
      </PopoverContent>
    </Popover>
  )
}
