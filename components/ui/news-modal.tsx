"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface NewsModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
  content?: string
}

export function NewsModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  content
}: NewsModalProps) {
  // Fungsi untuk mengkonversi teks menjadi HTML yang terformat
  const formatContentToHTML = (text: string) => {
    const paragraphs = text.split('\n').filter(p => p.trim() !== '')
    let html = ''
    let inList = false
    
    paragraphs.forEach((paragraph, index) => {
      const trimmed = paragraph.trim()
      
      if (trimmed.startsWith('•')) {
        if (!inList) {
          html += '<ul class="list-disc ml-6 space-y-2 mb-4">'
          inList = true
        }
        html += `<li class="text-base leading-7">${trimmed.substring(1).trim()}</li>`
      } else if (trimmed.includes(':') && !trimmed.startsWith('•')) {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        const [title, ...rest] = trimmed.split(':')
        if (rest.length > 0) {
          html += `<h3 class="text-lg font-semibold text-gray-800 mt-6 mb-3">${title.trim()}:</h3>`
          html += `<p class="text-base leading-7 mb-4 ml-4">${rest.join(':').trim()}</p>`
        } else {
          html += `<p class="text-base leading-7 mb-4">${trimmed}</p>`
        }
      } else {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<p class="text-base leading-7 mb-4">${trimmed}</p>`
      }
    })
    
    if (inList) {
      html += '</ul>'
    }
    
    return html
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-0">
        {/* Header dengan tombol close */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-gray-900 pr-4">
              {title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Hero Image */}
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Title Berita */}
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold text-gray-800 text-center leading-tight">
                {title}
              </h2>
            </div>
            
            {/* Additional Content */}
            {content && (
              <div className="news-content">
                <div 
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: formatContentToHTML(content)
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
