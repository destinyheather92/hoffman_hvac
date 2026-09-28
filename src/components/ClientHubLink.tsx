import type { AnchorHTMLAttributes } from 'react'
import { JOBBER_CLIENT_HUB_URL } from '../data/business'

/**
 * Every "Client Login" link on the site. Opens the company's Jobber Client Hub in a new tab —
 * customers sign in on Jobber's site; this site never sees or handles their login or account data.
 */
export function ClientHubLink({ children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={JOBBER_CLIENT_HUB_URL} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens our secure Jobber Client Hub in a new tab)</span>
    </a>
  )
}
