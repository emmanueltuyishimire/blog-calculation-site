"use client"

import * as React from "react"
import { GripVertical } from "lucide-react"
import {
  Splitter,
  SplitterPanel,
  type SplitterPanelProps,
  type SplitterProps,
  type SplitterResizeHandle,
  type SplitterResizeHandleProps,
} from "@ark-ui/react/splitter"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = ({
  className,
  ...props
}: React.ComponentProps<typeof Splitter> & {
  className?: string
  children: React.ReactNode
}) => (
  <Splitter
    className={cn(
      "flex h-full w-full data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
)

const ResizablePanel = (
  props: SplitterPanelProps & React.RefAttributes<HTMLDivElement>
) => <SplitterPanel {...props} />

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: SplitterResizeHandleProps & {
  withHandle?: boolean
  className?: string
}) => (
  <SplitterResizeHandle
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:inset-x-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </SplitterResizeHandle>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
