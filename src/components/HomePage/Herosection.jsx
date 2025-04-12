import React from 'react'
import { Button } from '../ui/button'

const Herosection = () => {
    return (
        <section className="bg-background py-10">
          <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center">
            
            
            <div className="max-w-lg">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground">
                Analytics for Your E-Commerce Business
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Powerful insights to grow your sales across platforms like Amazon, Flipkart, and Shopify.
              </p>
              <Button variant="default">
                Get Started
              </Button>
            </div>
    
            
            <div className="mt-4 w-full max-w-md rounded-lg border-2 border-blue-200 bg-card p-6 shadow-sm md:mt-0">
              <div className="grid grid-cols-2 gap-4">
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Users</p>
                  <p className="text-2xl font-bold text-foreground">12,450</p>
                </div>
                
                <div className="flex flex-col items-end">
                  <p className="mb-1 rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-600">
                    +5.4%
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    Revenue Growth %
                  </p>
                </div>
    
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <p className="text-2xl font-bold text-foreground">$32,500</p>
                </div>
                
                <div className="flex flex-col items-end">
                  <p className="text-sm font-medium text-muted-foreground">Sales Overview</p>
                  
                  <div className="mt-1 h-12 w-full rounded bg-gray-200" />
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Herosection
