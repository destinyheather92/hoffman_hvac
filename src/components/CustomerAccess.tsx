import { business } from '../data/business'
import { ClientHubLink } from './ClientHubLink'
import { ExternalIcon, LockIcon, UserIcon } from './Icons'
import { Reveal } from './Reveal'

/**
 * Gateway for existing customers to the company's Jobber Client Hub. Links out only — nothing is collected here.
 * TODO(client): once the owner confirms which Client Hub features are switched on in Jobber (e.g. quotes,
 * invoices, online payments, appointments), they can be named in the copy below. Until then it promises none.
 */
export function CustomerAccess() {
  return (
    <section id="client-login" aria-labelledby="client-login-title" className="bg-paper pb-24 md:pb-32">
      <div className="wrap">
        <Reveal className="relative grid gap-8 bg-navy-900 p-8 text-white sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-14">
          <span className="absolute -top-[2px] left-0 h-[6px] w-28 bg-orange" aria-hidden="true" />

          <div className="lg:col-span-7">
            <p className="label flex items-center gap-3 text-orange">
              <LockIcon width={16} height={16} />
              Existing customers
            </p>
            <h2 id="client-login-title" className="display-md mt-4">
              Already a customer?
            </h2>
            <p className="mt-5 max-w-xl text-[1.15rem] leading-relaxed text-steel-100">
              Access your customer account through our secure Client Hub.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <ClientHubLink className="btn btn-light w-full sm:w-auto">
              <UserIcon /> Client Login <ExternalIcon />
            </ClientHubLink>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-snug text-steel-300">
              Opens our Client Hub, hosted by Jobber, in a new tab. You sign in on Jobber’s site — this website
              never asks for your login.
            </p>
            <p className="mt-3 text-[0.95rem] text-steel-300">
              Trouble signing in? Call{' '}
              <a href={business.phoneHref} className="link-line font-semibold text-white">
                {business.phone}
              </a>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
