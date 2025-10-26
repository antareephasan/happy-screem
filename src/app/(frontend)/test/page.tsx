import {
  CTA,
  FeatureGrid,
  Gallery,
  Header,
  PricingTable,
  TwoColumnLayout,
} from '@/components/organized-components'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <PricingTable
        heading="Pricing Table"
        plans={[
          {
            name: 'Basic',
            monthlyPrice: '$10',
            yearlyPrice: '$100',
            features: ['Feature A', 'Feature B'],
          },
        ]}
        colorScheme="light"
      />
      {/* <Gallery heading="This is Gallery" images={['/fff', '/fff']} /> */}

      <Header
        heading="Custom Styled Header"
        description="This is description for header custom styled"
        colorScheme={{
          variant: 'custom',
          customColors: {
            background: '#f0f0f0',
            text: '#333333',
            accent: '#007bff',
            border: '#cccccc',
          },
        }}
      />
      <Header
        layout="split"
        imagePosition="right"
        tagline="Welcome"
        heading="Transform Your Digital Life"
        description="Learn to balance screen time..."
        image={{ src: '/hero.jpg', alt: 'Hero' }}
        buttons={[
          { text: 'Get Started', variant: 'default' },
          { text: 'Learn More', variant: 'secondary' },
        ]}
        colorScheme="light"
      />

      <Header
        layout="fullscreen"
        heading="Beautiful Hero Section"
        description="..."
        image={{ src: '/background.jpg', alt: 'Background' }}
        showOverlay
        overlayOpacity={0.6}
        colorScheme="light"
      />

      <Header
        layout="simple"
        heading="About Us"
        description="..."
        showButtons={false}
        colorScheme="light"
      />
      <CTA
        layout="centered"
        heading="Ready to Get Started?"
        description="Join thousands of happy customers"
        showForm={false}
        showButtons
        buttons={[
          { text: 'Start Free Trial', variant: 'default' },
          { text: 'Schedule Demo', variant: 'secondary' },
        ]}
        colorScheme="light"
      />
      <TwoColumnLayout
        heading="Our Mission"
        description="..."
        image={{ src: '/mission.jpg', alt: 'Mission' }}
        buttons={[{ text: 'Learn More', variant: 'secondary' }]}
        colorScheme="light"
      />

      <TwoColumnLayout
        imagePosition="left"
        tagline="Our Story"
        heading="How We Started"
        description="..."
        image={{ src: '/story.jpg', alt: 'Story' }}
        showButtons={false}
        colorScheme="light"
      />
      <FeatureGrid
        columns={3}
        itemType="icon"
        heading="Our Services"
        features={[
          {
            icon: { src: '/icon1.svg', alt: 'Service 1' },
            title: 'Service One',
            description: 'Description...',
            button: { text: 'Learn More', variant: 'link' },
          },
          // ...more features
        ]}
        showItemButtons
        colorScheme="light"
      />

      <FeatureGrid
        columns={2}
        itemType="image"
        features={[
          {
            image: { src: '/feature1.jpg', alt: 'Feature 1' },
            title: 'Feature One',
            description: 'Description...',
          },
          // ...more features
        ]}
        showBottomButtons
        bottomButtons={[{ text: 'View All', variant: 'secondary' }]}
        colorScheme="light"
      />
      <CTA
        layout="split"
        heading="Subscribe to Our Newsletter"
        description="Get weekly tips..."
        showForm
        formPlaceholder="Enter your email"
        formButtonText="Subscribe"
        image={{ src: '/newsletter.jpg', alt: 'Newsletter' }}
        colorScheme="light"
      />

      <CTA
        layout="centered"
        heading="Ready to Get Started?"
        description="Join thousands of happy customers"
        showForm={false}
        showButtons
        buttons={[
          { text: 'Start Free Trial', variant: 'default' },
          { text: 'Schedule Demo', variant: 'secondary' },
        ]}
        colorScheme="light"
      />
    </div>
  )
}
export default TestPage
