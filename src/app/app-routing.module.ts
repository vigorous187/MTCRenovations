import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BasementGetFreeQuoteComponent } from './components/basement-get-free-quote/basement-get-free-quote.component';
import { BasementOurProcessComponent } from './components/basement-our-process/basement-our-process.component';
import { BasementOurWorkComponent } from './components/basement-our-work/basement-our-work.component';
import { BasementComponent } from './components/basement/basement.component';
import { BathroomAboutUsComponent } from './components/bathroom-about-us/bathroom-about-us.component';
import { BathroomGetFreeQuoteComponent } from './components/bathroom-get-free-quote/bathroom-get-free-quote.component';
import { BathroomHowItWorksComponent } from './components/bathroom-how-it-works/bathroom-how-it-works.component';
import { BathroomOurWorkComponent } from './components/bathroom-our-work/bathroom-our-work.component';
import { BathroomWhyUsComponent } from './components/bathroom-why-us/bathroom-why-us.component';
import { BathroomComponent } from './components/bathroom/bathroom.component';
import { CareerComponent } from './components/career/career.component';
import { FinancialComponent } from './components/financial/financial.component';
import { FlooringAboutUsComponent } from './components/flooring-about-us/flooring-about-us.component';
import { FlooringGetFreeQuoteComponent } from './components/flooring-get-free-quote/flooring-get-free-quote.component';
import { FlooringHowItWorksComponent } from './components/flooring-how-it-works/flooring-how-it-works.component';
import { FlooringOurWorkComponent } from './components/flooring-our-work/flooring-our-work.component';
import { FlooringWhyUsComponent } from './components/flooring-why-us/flooring-why-us.component';
import { FlooringComponent } from './components/flooring/flooring.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { KitchenAboutUsComponent } from './components/kitchen-about-us/kitchen-about-us.component';
import { KitchenGetFreeQuoteComponent } from './components/kitchen-get-free-quote/kitchen-get-free-quote.component';
import { KitchenHowItWorksComponent } from './components/kitchen-how-it-works/kitchen-how-it-works.component';
import { KitchenOurWorkComponent } from './components/kitchen-our-work/kitchen-our-work.component';
import { KitchenWhyUsComponent } from './components/kitchen-why-us/kitchen-why-us.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OurClientsComponent } from './components/our-clients/our-clients.component';
import { PaintingAboutUsComponent } from './components/painting-about-us/painting-about-us.component';
import { PaintingGetFreeQuoteComponent } from './components/painting-get-free-quote/painting-get-free-quote.component';
import { PaintingHowItWorksComponent } from './components/painting-how-it-works/painting-how-it-works.component';
import { PaintingOurWorkComponent } from './components/painting-our-work/painting-our-work.component';
import { PaintingWhyUsComponent } from './components/painting-why-us/painting-why-us.component';
import { PaintingComponent } from './components/painting/painting.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { PaintingCareerComponent } from './components/painting-career/painting-career.component';
import { FlooringCareerComponent } from './components/flooring-career/flooring-career.component';
import { KitchenCareerComponent } from './components/kitchen-career/kitchen-career.component';
import { BathroomCareerComponent } from './components/bathroom-career/bathroom-career.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { NewleadintakeComponent } from './components/newleadintake/newleadintake.component';
import { NewvendorformComponent } from './components/newvendorform/newvendorform.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { seo: {
      title: 'MTC Renovations Hamilton | Basement, Kitchen & Bathroom Experts',
      description: "Hamilton's trusted renovation contractor. Basement finishing, kitchen & bathroom remodels, flooring, painting. Free quotes. Serving Hamilton, Burlington, Oakville & GTA."
    }}
  },

  // Basement routes
  {
    path: 'basement',
    component: BasementComponent,
    data: { seo: {
      title: 'Basement Renovation Hamilton | MTC Renovations — Costs & Process 2026',
      description: 'Transform your Hamilton basement with MTC Renovations. Full finishing, legal suites, waterproofing prep. See our process, pricing, and completed projects. Free quote.'
    }}
  },
  {
    path: 'basement/how-it-works',
    component: HowItWorksComponent,
    data: { seo: {
      title: 'How Basement Renovation Works | MTC Renovations Hamilton',
      description: 'Our proven 5-step basement renovation process in Hamilton. From design to final walkthrough — see how MTC delivers on time and on budget.'
    }}
  },
  {
    path: 'basement/about-us',
    component: AboutUsComponent,
    data: { seo: {
      title: 'About MTC Renovations | Hamilton Basement Experts',
      description: "Licensed, insured renovation contractor serving Hamilton and the GTA. Learn about MTC Renovations' team, values, and track record."
    }}
  },
  {
    path: 'basement/careers',
    component: CareerComponent,
    data: { seo: {
      title: 'Renovation Careers Hamilton | Join MTC Renovations',
      description: 'Looking for renovation work in Hamilton? MTC Renovations is hiring skilled tradespeople and apprentices. Apply now.'
    }}
  },
  {
    path: 'basement/financing',
    component: FinancialComponent,
    data: { seo: {
      title: 'Basement Renovation Financing Hamilton | MTC Renovations',
      description: "Flexible financing options for your Hamilton basement renovation. Low monthly payments, quick approvals. Don't let budget hold back your project."
    }}
  },
  {
    path: 'basement/why-mtc',
    component: WhyUsComponent,
    data: { seo: {
      title: "Why Choose MTC Renovations | Hamilton's Trusted Contractor",
      description: "Licensed, insured, and backed by real Hamilton homeowner reviews. See why MTC Renovations is the GTA's top-rated renovation company."
    }}
  },
  {
    path: 'basement/our-clients',
    component: OurClientsComponent,
    data: { seo: {
      title: 'MTC Renovations Client Reviews | Hamilton Homeowners',
      description: 'Real reviews from Hamilton and GTA homeowners who renovated with MTC. See their stories and finished basements.'
    }}
  },
  {
    path: 'basement/our-work',
    component: BasementOurWorkComponent,
    data: { seo: {
      title: 'Basement Renovation Portfolio | MTC Renovations Hamilton',
      description: 'Browse completed basement renovation projects in Hamilton, Burlington, and Oakville. Before & after photos from real MTC jobs.'
    }}
  },
  {
    path: 'basement/get-free-quote',
    component: BasementGetFreeQuoteComponent,
    data: { seo: {
      title: 'Get a Free Basement Renovation Quote | MTC Renovations Hamilton',
      description: 'Request your free basement renovation estimate from MTC Renovations. Hamilton & GTA homeowners — get your project priced within 24 hours.'
    }}
  },
  {
    path: 'basement/our-process',
    component: BasementOurProcessComponent,
    data: { seo: {
      title: 'Basement Renovation Process | MTC Renovations Step-by-Step',
      description: 'See exactly how MTC Renovations handles your Hamilton basement from first call to final inspection. Detailed process, no surprises.'
    }}
  },

  // Bathroom routes
  {
    path: 'bathroom',
    component: BathroomComponent,
    data: { seo: {
      title: 'Bathroom Renovation Hamilton | MTC Renovations — Walk-in Showers & Remodels',
      description: 'Custom bathroom renovations in Hamilton. Walk-in showers, tile work, vanities, full remodels. Licensed contractors. Free estimate — results in weeks, not months.'
    }}
  },
  {
    path: 'bathroom/how-it-works',
    component: BathroomHowItWorksComponent,
    data: { seo: {
      title: 'Bathroom Renovation Process Hamilton | MTC Renovations',
      description: 'How MTC Renovations handles your Hamilton bathroom remodel from design to final tile. Timeline, milestones, what to expect.'
    }}
  },
  {
    path: 'bathroom/about-us',
    component: BathroomAboutUsComponent,
    data: { seo: {
      title: 'About Our Bathroom Renovation Team | MTC Renovations Hamilton',
      description: 'Meet the MTC team that handles bathroom renovations across Hamilton and the GTA. Licensed, insured, and detail-obsessed.'
    }}
  },
  {
    path: 'bathroom/why-mtc',
    component: BathroomWhyUsComponent,
    data: { seo: {
      title: 'Why Choose MTC for Your Bathroom Renovation | Hamilton',
      description: '5-star rated bathroom renovations in Hamilton. On-time, on-budget, and backed by a workmanship warranty. See what sets MTC apart.'
    }}
  },
  {
    path: 'bathroom/our-work',
    component: BathroomOurWorkComponent,
    data: { seo: {
      title: 'Bathroom Renovation Photos Hamilton | MTC Renovations Portfolio',
      description: 'Real bathroom renovation photos from Hamilton and GTA projects. Walk-in showers, full remodels, tile transformations by MTC Renovations.'
    }}
  },
  {
    path: 'bathroom/get-free-quote',
    component: BathroomGetFreeQuoteComponent,
    data: { seo: {
      title: 'Free Bathroom Renovation Quote Hamilton | MTC Renovations',
      description: 'Get your free bathroom renovation estimate in Hamilton. MTC Renovations responds within 24 hours. No obligation.'
    }}
  },
  {
    path: 'bathroom/careers',
    component: BathroomCareerComponent,
    data: { seo: {
      title: 'Bathroom Renovation Jobs Hamilton | MTC Renovations Careers',
      description: 'Join MTC Renovations — Hamilton bathroom renovation team. Tile setters, plumbing helpers, and finishers wanted.'
    }}
  },

  // Kitchen routes
  {
    path: 'kitchen',
    component: KitchenComponent,
    data: { seo: {
      title: 'Kitchen Renovation Hamilton | MTC Renovations — Cabinets, Countertops & More',
      description: 'Complete kitchen renovations in Hamilton. Custom cabinets, quartz countertops, open-concept layouts. Licensed & insured. Get your free estimate today.'
    }}
  },
  {
    path: 'kitchen/about-us',
    component: KitchenAboutUsComponent,
    data: { seo: {
      title: 'Our Kitchen Renovation Team | MTC Renovations Hamilton',
      description: 'The Hamilton kitchen renovation specialists at MTC. Licensed contractors, designers, and finishers delivering full kitchen transformations.'
    }}
  },
  {
    path: 'kitchen/why-mtc',
    component: KitchenWhyUsComponent,
    data: { seo: {
      title: 'Why MTC for Your Kitchen Renovation | Hamilton & GTA',
      description: 'Transparent pricing, fixed timelines, and real Hamilton reviews. See why homeowners choose MTC Renovations for their kitchen remodel.'
    }}
  },
  {
    path: 'kitchen/how-it-works',
    component: KitchenHowItWorksComponent,
    data: { seo: {
      title: 'Kitchen Renovation Process Hamilton | MTC Renovations',
      description: "From cabinet selection to final reveal — MTC's proven kitchen renovation process in Hamilton. What to expect and when."
    }}
  },
  {
    path: 'kitchen/our-work',
    component: KitchenOurWorkComponent,
    data: { seo: {
      title: 'Kitchen Renovation Portfolio Hamilton | MTC Renovations',
      description: 'Before and after kitchen renovations across Hamilton, Burlington, and Oakville. Browse real MTC projects.'
    }}
  },
  {
    path: 'kitchen/get-free-quote',
    component: KitchenGetFreeQuoteComponent,
    data: { seo: {
      title: 'Free Kitchen Renovation Quote Hamilton | MTC Renovations',
      description: 'Get a free kitchen renovation estimate in Hamilton. MTC Renovations responds within 24 hours with a detailed quote.'
    }}
  },
  {
    path: 'kitchen/careers',
    component: KitchenCareerComponent,
    data: { seo: {
      title: 'Kitchen Renovation Jobs Hamilton | Careers at MTC Renovations',
      description: 'MTC Renovations is hiring in Hamilton for kitchen installation, cabinetry, and finishing roles. Apply today.'
    }}
  },

  // Flooring routes
  {
    path: 'flooring',
    component: FlooringComponent,
    data: { seo: {
      title: 'Flooring Installation Hamilton | Hardwood, Vinyl & Tile | MTC Renovations',
      description: 'Professional flooring installation in Hamilton. Hardwood, engineered wood, luxury vinyl plank, and tile. Licensed, insured. Free in-home estimate.'
    }}
  },
  {
    path: 'flooring/about-us',
    component: FlooringAboutUsComponent,
    data: { seo: {
      title: 'About Our Flooring Team | MTC Renovations Hamilton',
      description: 'Experienced flooring installers serving Hamilton and the GTA. Hardwood, LVP, tile — MTC Renovations delivers clean, lasting results.'
    }}
  },
  {
    path: 'flooring/why-mtc',
    component: FlooringWhyUsComponent,
    data: { seo: {
      title: 'Why Choose MTC for Flooring | Hamilton Flooring Experts',
      description: "Trusted by Hamilton homeowners for precise flooring installation. See MTC's warranty, process, and real reviews."
    }}
  },
  {
    path: 'flooring/how-it-works',
    component: FlooringHowItWorksComponent,
    data: { seo: {
      title: 'Flooring Installation Process Hamilton | MTC Renovations',
      description: 'How MTC Renovations installs flooring in Hamilton homes. Sub-floor prep, installation, finishing — what to expect.'
    }}
  },
  {
    path: 'flooring/our-work',
    component: FlooringOurWorkComponent,
    data: { seo: {
      title: 'Flooring Portfolio Hamilton | MTC Renovations Projects',
      description: 'Browse hardwood, LVP, and tile flooring installations completed by MTC Renovations across Hamilton and the GTA.'
    }}
  },
  {
    path: 'flooring/get-free-quote',
    component: FlooringGetFreeQuoteComponent,
    data: { seo: {
      title: 'Free Flooring Estimate Hamilton | MTC Renovations',
      description: 'Get a free flooring installation quote in Hamilton. MTC Renovations serves Hamilton, Burlington, Oakville, and GTA.'
    }}
  },
  {
    path: 'flooring/careers',
    component: FlooringCareerComponent,
    data: { seo: {
      title: 'Flooring Installer Jobs Hamilton | MTC Renovations Careers',
      description: 'Flooring installation positions available at MTC Renovations in Hamilton. Hardwood and LVP installers — apply now.'
    }}
  },

  // Painting routes
  {
    path: 'painting',
    component: PaintingComponent,
    data: { seo: {
      title: 'Interior Painting Hamilton | Licensed & Insured | MTC Renovations',
      description: 'Professional interior painting in Hamilton. Clean prep, premium paint, zero mess. Licensed painters serving Hamilton, Burlington, and Oakville. Free estimate.'
    }}
  },
  {
    path: 'painting/about-us',
    component: PaintingAboutUsComponent,
    data: { seo: {
      title: 'About Our Painting Team | MTC Renovations Hamilton',
      description: "MTC's licensed painters bring precision and care to every Hamilton home. Learn about our team and approach."
    }}
  },
  {
    path: 'painting/why-mtc',
    component: PaintingWhyUsComponent,
    data: { seo: {
      title: "Why Choose MTC for Painting | Hamilton's Painting Experts",
      description: 'Detailed prep work, premium paints, guaranteed results. Why Hamilton homeowners trust MTC Renovations for interior painting.'
    }}
  },
  {
    path: 'painting/how-it-works',
    component: PaintingHowItWorksComponent,
    data: { seo: {
      title: 'Interior Painting Process Hamilton | MTC Renovations',
      description: 'How MTC Renovations handles your Hamilton interior painting from prep to clean-up. Our process, timeline, and what we protect.'
    }}
  },
  {
    path: 'painting/our-work',
    component: PaintingOurWorkComponent,
    data: { seo: {
      title: 'Interior Painting Portfolio Hamilton | MTC Renovations',
      description: 'Before and after interior painting projects in Hamilton and the GTA. Browse completed rooms by MTC Renovations.'
    }}
  },
  {
    path: 'painting/get-free-quote',
    component: PaintingGetFreeQuoteComponent,
    data: { seo: {
      title: 'Free Interior Painting Quote Hamilton | MTC Renovations',
      description: 'Get a free interior painting estimate in Hamilton. MTC Renovations responds within 24 hours.'
    }}
  },
  {
    path: 'painting/careers',
    component: PaintingCareerComponent,
    data: { seo: {
      title: 'Painting Jobs Hamilton | Careers at MTC Renovations',
      description: 'Interior painting positions at MTC Renovations in Hamilton. Journeypersons and apprentice painters — apply now.'
    }}
  },

  // Utility routes
  {
    path: 'thank-you',
    component: ThankYouComponent,
    data: { seo: {
      title: 'Thank You | MTC Renovations Hamilton',
      description: "We've received your request. A MTC Renovations team member will be in touch within 24 hours."
    }}
  },
  {
    path: 'newleadintake',
    component: NewleadintakeComponent,
    data: { seo: {
      title: 'New Lead Intake | MTC Renovations',
      description: 'MTC Renovations internal lead intake form.'
    }}
  },
  {
    path: 'newvendorintake',
    component: NewvendorformComponent,
    data: { seo: {
      title: 'Vendor Application | MTC Renovations',
      description: 'Apply to become a vendor or subcontractor with MTC Renovations in Hamilton.'
    }}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
