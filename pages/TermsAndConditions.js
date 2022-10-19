import React from 'react'
import BackButton from '../components/BackButton/BackButton'

function TermsAndConditions() {
  return (
    <div>
      <div className="flex items-center space-x-5">
        <BackButton />
        <p className="text-md mt-5 font-bold text-primary lg:pl-7">
          Rarbit Ltd. - Terms and Conditions
        </p>
      </div>
      <div className="m-8 justify-center rounded-2xl bg-white p-8 text-slate-500 shadow">
        <p>
          In connection with using or accessing the Services you will not: 1.
          breach or circumvent any laws, regulations, third-party rights or our
          systems, policies, or determinations of your account status; • use our
          Services if you are not able to form legally binding contracts (for
          example, if you are under 18 years old), or are temporarily or
          indefinitely suspended from using our sites, services, applications or
          tools; 2. post false, inaccurate, misleading, deceptive, defamatory,
          or libelous content; 3. transfer your Rarbit account and user ID to
          another party without our consent; 4. distribute viruses or any other
          technologies that may harm Rarbit or the interests or property of
          users; 5. use any robot, spider, scraper, data mining tools, data
          gathering and extraction tools, or other automated means to access our
          Services for any purpose, except with the prior express permission of
          Rarbit; 6. interfere with the working of our Services, or impose an
          unreasonable or disproportionately large load on our infrastructure; •
          infringe the copyright, trademark, patent, publicity, moral, database,
          and/or other intellectual property rights (collectively, "Intellectual
          Property Rights") that belong to or are licensed to Rarbit. Some, but
          not all, actions that may constitute infringement are reproducing,
          performing, displaying, distributing, copying, reverse engineering,
          decompiling, disassembling, or preparing derivative works from content
          that belongs to Rarbit or someone else; 7. infringe any Intellectual
          Property Rights that belong to third parties affected by your use of
          the Services or post content that does not belong to you; 8.
          commercialize any Rarbit application or any information or software
          associated with such application, except with the prior express
          permission of Rarbit; 9. harvest or otherwise collect information
          about users without their consent; or 10. circumvent any technical
          measures used to provide the Services. If we believe you are abusing
          Rarbit and/or our Services in any way, we may, in our sole discretion
          and without limiting other remedies, limit, suspend, or terminate your
          user account(s) and access to our Services, delay or remove hosted
          content, remove any special status associated with your account(s),
          remove, not display, and/or demote listings, reduce, and take
          technical and/or legal steps to prevent you from using our Services.
          We may cancel unconfirmed accounts or accounts that have been inactive
          for a long time. Additionally, we reserve the right to refuse, modify,
          or terminate all or part of our Services to anyone for any reason at
          our discretion.
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditions
