# 44 Sunsets

A web application inspired by _The Little Prince_ that lets you check where sunset is happening around the world. Fulfill the dream of watching 44 sunsets within one day - experience the magic of chasing sunsets across different time zones and locations, just as the little prince could by moving his chair a few steps.

## Inspiration

> “One day,” you said to me, “I saw the sunset forty-four times!”
> And a little later you added: “You know, one loves the sunset when one is so sad…”
> “Were you so sad, then?” I asked, “on the day of the forty-four sunsets?”
> But the little prince made no reply.
>
> — The Little Prince, Antoine de Saint-Exupéry

## User Flow

1. **Start**: Begin at the intro page with the excerpt from _The Little Prince_
2. **Check Destinations**: View the departure board showing flights to locations currently experiencing or about to experience sunset
3. **Board Flight**: Choose a destination to begin your journey
4. **Fly**: Fly in the helicopter to your destination
5. **Arrive**: View the map centered on your destination with location info and sunset details

## How It Works

The core of this app is to find where sunset is happening at current time.

The basic idea is to find where the evening terminator (the line separating day and night) is at current time, and then to find locations on/near that line.

### Steps

1. Prepare cities data - round cities' coordinates to .5 or .0, and then group the cities by the rounded coordinates:

   ```
   {
      "-6, 107":
      [
         {id: "1360771077", lat: -6.175, lng: 106.8275, name: "Jakarta", nameAscii: "Jakarta", roundedLat: -6, roundedLng: 107},
         { id: "1360673840", lat: -6.2333, lng: 107, name: "Bekasi", nameAscii: "Bekasi", roundedLat: -6, roundedLng: 107},
         { id: "1360997891", lat: -6.2138, lng: 106.9473, name: "Cakung", nameAscii: "Cakung", roundedLat: -6, roundedLng: 107},
      ],
      "-7, 39.5":
      [
         {id: "1834843853", lat: -6.8161, lng: 39.2803, name: "Dar es Salaam", nameAscii: "Dar es Salaam", roundedLat: -7, roundedLng: 39.5},
      ],
      ...
   }
   ```

2. Get terminator coordinates for current time, which includes sunrise and sunset locations:

   ```
   [
     { lat: 17.726800752576164, lng: -180 },
     { lat: 18.89367852541668, lng: -179.5 },
     { lat: 20.04319724653031, lng: -179 },
     ...
     { lat: 15.343791893305701, lng: 179 },
     { lat: 16.54325015768219, lng: 179.5 },
     { lat: 17.726800752576132, lng: 180 },

   ]
   ```

3. Find all the evening terminator coordinates (only the sunset locations) and round them to end with .5 or .0:

   ```
   [
     { lat: 17.5, lng: -180 },
     { lat: 18.5, lng: -179.5 },
     { lat: 19.5, lng: -179 },
     ...
     { lat: 15.5, lng: 179 },
     { lat: 16.5, lng: 179.5 },
     { lat: 17.5, lng: 180 },

   ]
   ```

4. Find cities whose rounded coordinates match the rounded evening terminator coordinates:

   ```
   [
      {id: "1360771077", lat: -6.175, lng: 106.8275, name: "Jakarta", nameAscii: "Jakarta", roundedLat: -6, roundedLng: 107},
      { id: "1360673840", lat: -6.2333, lng: 107, name: "Bekasi", nameAscii: "Bekasi", roundedLat: -6, roundedLng: 107},
      { id: "1360997891", lat: -6.2138, lng: 106.9473, name: "Cakung", nameAscii: "Cakung", roundedLat: -6, roundedLng: 107},
   ]
   ```

5. If there's no matching city, the evening terminator is likely to be passing an ocean, then get the terminator point near the equator and compare the longitude to find out which ocean it is.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Leaflet & React-Leaflet** - Beautiful interactive map
- **React Bootstrap** - UI components
- **Wouter** - Lightweight routing
- **react-split-flap** - Split-flap display for the departure board
- **Vitest** - Unit testing

## API Used

- **sunrisesunset.io** - Provides sunset data based on latitude and longitude
