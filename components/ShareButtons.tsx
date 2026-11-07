'use client'
import type { PropertyCard } from '~/src/types/property';
import { FacebookShareButton, XShareButton, WhatsappShareButton,TelegramShareButton, FacebookIcon,XIcon, WhatsappIcon, TelegramIcon } from 'react-share';


export default function ShareButtons({property}: {property: PropertyCard}){

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`

    return(
          <>
          <h3 className='text-xl font-bold text-center pt-2'>Share This Property:</h3>
          <div className='flex gap-3 justify-center pb-5'>
            <FacebookShareButton url={shareUrl} hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}>
            <FacebookIcon size={30} />
            </FacebookShareButton>
            <XShareButton url={shareUrl} hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}>
            <XIcon size={30} />
            </XShareButton>
             <WhatsappShareButton url={shareUrl} message={`${property.type.replace(/\s/g, '')}ForRent`}>
            <WhatsappIcon size={30} />
            </WhatsappShareButton>
               <TelegramShareButton url={shareUrl} text={`${property.type.replace(/\s/g, '')}ForRent`}>
            <TelegramIcon size={30} />
            </TelegramShareButton>

          </div>
          </>
    )
}