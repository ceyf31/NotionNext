import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer(props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return (
    <footer className="relative w-full bg-f7f9fe px-6">
      {/* 去掉了顶部横线 */}
      <DarkModeButton className='pt-4' />

      {/* 修改字体颜色为深紫色 */}
      <div className="text-purple-800 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap items-center text-sm">
        <div className='text-center mx-auto'>&copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.</div>
        <div className="md:p-0 text-center text-xs">
          {/* 右侧链接 */}
          {/* <a href="#" className="text-black dark:text-gray-200 no-underline hover:underline">Privacy Policy</a> */}
          {siteConfig('BEI_AN') && (
            <a href="https://beian.miit.gov.cn/" className="text-black dark:text-gray-200 no-underline hover:underline ml-4">
              {siteConfig('BEI_AN')}
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
