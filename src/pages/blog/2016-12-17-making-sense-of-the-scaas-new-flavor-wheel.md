---
templateKey: blog-post
image: >-
  /img/magento-vs-shopify-which-is-the-best-platform-for-your-ecommerce-business.jpg
title: Magento vs Shopify
category: Ecommerce
date: 2018-11-12T15:04:10.000Z
tags:
  - magento
  - shopify
  - ecommerce
---
Recently I had to a request from a client to make an e-commerce site.  However the site wasn't your typical e-commerce site.  Instead of a checkout they wanted a quoting system.  I chose Magento 2.x since I felt that I really needed the flexibility Magento typically offers. 



## Extensions

You would think with a platform like Magento they would have an easy way to add an extension, but no.  Download the zip file, extract the contents and move to the server, SSH to the server to run php commands to upgrade the site and deploy static content.  Although Magento does use composer to install packages, most of these third party extensions are paid for and require you to download extensions.

With Shopify it was extremely easy to add a quote extension.  They even had a free trial so I could integrate it into my site, test it and then pay for it.  



## Customization

I have previously worked with Magento 1.x which seemed to be fairly flexible and easy to customize.  With Magento 2.x I found it absolutely horrible to create my own child theme.  I had followed all of their instructions to create a child theme based on their Luma theme.  When I did this, I lost all of my custom blocks that I had created.  I guess when you create a child theme you lose all of your blocks from the parent theme?  My other complaint was working with the theme style.  Their css preprocessor of choice is LESS, which is fine.  However it was troubling to test my changes.  Every time I made a change I had to delete folders to clear the cache!  Even in developer mode!  This is what made me give up on Magento unfortunately.

The reason I didn't choose Shopify initially was because I assumed I wouldn't have the ability to customize the look and feel as good.  I was wrong.  I absolutely love the UI/UX of Shopify.  Shopify is a perfect example of a great architecture and a well thought out tech stack.  I am able to update liquid templates and scss directly in the browser.  



## Cost

While Magento Community is free, you still have to figure in your hosting and cost of extensions.  Basic Magento hosting for approximately $10-15 a month isn't too bad, however this is literally the most minimum requirement to run Magento.  I would HIGHLY recommend getting more than the minimum hosting requirements for Magento.  Aside from hosting we had to pay for all of our extensions which did not have free trials.  Most of Magento's extensions were a one time fee which seemed a little pricy.  

Shopify pricing seems very reasonable.  At $29/month it's practically the price of decent hosting for Magento.  Again the pricing model of their extensions was reasonable with free trials since their SASS model is purely a hosted model.  



## Conclusion

I will never use Magento for a small e-commerce site unless I have to.  Magento has it's purpose if you need a large enterprise site with developers that build and maintain a specific use case.  For me this just wasn't what I needed.
