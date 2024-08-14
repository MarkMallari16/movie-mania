import React from 'react'
import Paragraph from '../components/Paragraph'
import SectionHeader from '../components/SectionHeader'

const Terms = () => {
    return (
        <div className='mt-28 mx-16'>
            <div>
                <h1 className='text-4xl'>Terms of Use</h1>

                <section>
                    <SectionHeader title="Last Updated: August 20, 2024" />
                    <Paragraph>
                        Welcome to Movie Mania! These Terms of Use ("Terms") govern your use of our website, located at [website URL] ("Site"). By accessing or using the Site, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Site.
                    </Paragraph>
                </section>
                <section>
                    <SectionHeader title=" 1. Use of the Site" />
                    <Paragraph >
                        1.1 You must be at least 13 years old to use Movie Mania. By using the Site, you represent and warrant that you are at least 13 years of age.
                    </Paragraph>
                    <Paragraph >
                        1.2 You agree to use the Site only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account, whether by you or by someone else using your account.
                    </Paragraph>
                </section>
                <section>
                    <SectionHeader title=" 2. Account Registration" />
                    <Paragraph >
                        2.1 To access certain features of the Site, you may be required to create an account. You must provide accurate and complete information during the registration process and keep your account information up to date.
                    </Paragraph>
                    <Paragraph >
                        2.2 You are responsible for maintaining the confidentiality of your account password and for restricting access to your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                    </Paragraph>
                </section>
                <section>
                    <SectionHeader title=" 3. Content on the Site" />

                    <Paragraph >
                        3.1 Movie Mania provides users with access to a variety of content, including movie information, trailers, reviews, and user-generated content ("Content"). All Content on the Site is for informational purposes only.
                    </Paragraph>
                    <Paragraph >
                        3.2 We do not guarantee the accuracy, completeness, or usefulness of any Content, and we are not responsible for any loss or damage arising from your reliance on such Content.
                    </Paragraph>
                    <Paragraph >
                        3.3 You may not copy, reproduce, distribute, or create derivative works from any Content on the Site without our prior written consent.
                    </Paragraph>
                </section>
                <section>
                    <SectionHeader title="  4. User-Generated Content" />
                    <Paragraph >
                        4.1 If you submit, post, or otherwise make available any content, such as reviews or comments, on the Site ("User Content"), you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content in any media.
                    </Paragraph>
                    <Paragraph >
                        4.2 You represent and warrant that you own or have the necessary rights to all User Content you submit and that your User Content does not violate any third-party rights or any applicable laws.
                    </Paragraph>
                    <Paragraph>
                        4.3 We reserve the right to remove or modify any User Content that violates these Terms or that we deem inappropriate in our sole discretion.
                    </Paragraph>
                </section>
                <section>
                    <SectionHeader title=" 5. Intellectual Property" />
                    <Paragraph>
                        5.1 All intellectual property rights in the Site, including but not limited to trademarks, logos, and Content, are owned by us or our licensors. You may not use our intellectual property without our prior written permission.
                    </Paragraph>
                </section>
            </div>
        </div>
    )
}

export default Terms