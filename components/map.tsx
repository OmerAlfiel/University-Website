"use client"

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from '@/components/ui/button'
import { Copy, Check } from 'lucide-react'

// Set the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNtYWVpbC1zaGFqYXIiLCJhIjoiY202ODlsdjNtMDl6ZDJqc2RoOGl3eHp6bCJ9.cLGG1N6svL5MVckGUvqcig'

interface MapProps {
  longitude?: number
  latitude?: number
  zoom?: number
  className?: string
  style?: string
}

export default function Map({ 
  longitude = 32.5599, // Khartoum longitude
  latitude = 15.5007,  // Khartoum latitude
  zoom = 12,
  className = "",
  style = "mapbox://styles/mapbox/streets-v11"
}: MapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [copied, setCopied] = useState(false)

  const locationText = `Gezira Island, Khartoum, Sudan (${latitude}, ${longitude})`

  const copyLocation = async () => {
    try {
      await navigator.clipboard.writeText(locationText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  useEffect(() => {
    if (map.current) return // Initialize map only once
    
    if (mapContainer.current) {
      // Configure RTL text plugin for Arabic content (client-side only)
      try {
        mapboxgl.setRTLTextPlugin(
          'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.3.0/mapbox-gl-rtl-text.js',
          null,
          true // Lazy load the plugin
        );
      } catch (error) {
        console.warn('RTL plugin could not be loaded:', error);
      }
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: style,
        center: [longitude, latitude],
        zoom: zoom
      })

      // Add navigation control (zoom buttons)
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')

      // Add a marker for the university location
      const marker = new mapboxgl.Marker({
        color: '#3b82f6' // Blue color to match the theme
      })
        .setLngLat([longitude, latitude])
        .addTo(map.current)

      // Add a popup to the marker
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<div style="padding: 10px;"><h3 style="margin: 0 0 5px 0; font-weight: bold;">GCT University</h3><p style="margin: 0; color: #666;">Gezira Island, Khartoum, Sudan</p></div>')

      marker.setPopup(popup)

      // Ensure map resizes properly after a short delay
      setTimeout(() => {
        if (map.current) {
          map.current.resize()
        }
      }, 100)
    }

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [longitude, latitude, zoom, style])

  return (
    <div className="space-y-4 h-full flex flex-col">
      {/* Copy Location Button */}
      <div className="flex justify-center">
        <Button 
          onClick={copyLocation}
          variant="outline"
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy Location
            </>
          )}
        </Button>
      </div>
      
      {/* Map Container with Left/Right Spacing */}
      <div className="px-4 md:px-8 lg:px-12 flex-1">
        <div 
          ref={mapContainer} 
          className={`w-full h-full rounded-lg ${className}`}
          style={{ minHeight: '500px', height: '100%' }}
        />
      </div>
    </div>
  )
}
