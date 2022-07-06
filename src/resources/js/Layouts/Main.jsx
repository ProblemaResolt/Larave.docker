/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Main() {
  return (
    <main>
    <AnimationOnScroll className="relative bg-white overflow-hidden" animateIn="animate__fadeIn">
      <div className=" mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="mx-auto pt-6 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">NtsJapanとして</span>{' '}<br />
                <span className="block text-indigo-600 xl:inline">出来る事</span>
              </h1>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              企業としての其々目標を掲げております。<br />
              N：New(新しい)<br />
              T：Technology (情報)、Tactics(戦略)、Thank(感謝)、Trust(信頼)<br />
              S：Support(支援)、Success(成功)、Service(貢献)<br />
              企業、そして一人の人間として、人々や社会の為に貢献する為に８つのNTSを存在目的としています。
              </p>
              <h2 className="text-base sm:mt-5 md:mt-5 tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">SES事業</h2>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              SES(System Engineering Service)を通じて開発〜インフラ等の様々な技術者のアウトソースを低コストで提案出来る様心がけております。
              </p>
              <h2 className="text-base sm:mt-5 md:mt-5 tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">フィールドサービス事業</h2>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              クライアントPCのセッティングやキッティング等の展開作業も行なっております。
              </p>
              <h2 className="text-base sm:mt-5 md:mt-5 tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-3xl">IT保守</h2>
              <p className="text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
              PC周りに限らずシステム保守・運用等ITに関連する全般をサポート致します。<br />（ユーザー問い合わせ、運用監視、障害対応等）
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </AnimationOnScroll>

    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    <div className='h-screen'>
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </AnimationOnScroll>

    </main>
  )
}
