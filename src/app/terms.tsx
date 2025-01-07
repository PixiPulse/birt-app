import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fontSize } from '@/constants/token'
import Container from '@/components/container/container'
import { Link } from 'expo-router'

export default function TermsScreen() {
	return (
		<ScrollView>
			<Container>
				<View style={styles.page}>
					<Text style={styles.para}>
						The Terms and Conditions of Use outline the agreement between the User and BEST of ROME
						TOUR with registered office in Via Borgo Vittorio 38, fiscal code and number of
						registration No. 17223631007, governing the use of the BIRT mobile application and the
						Best in Rome Tour website. By accessing and using the App and Website, the User agrees
						to these Terms and the Privacy Notice on the Best in Rome Tour website
						<Link href={'https://bestinrometours.com/'} style={styles.contact}>
							{' '}
							(www.bestinrometours.com)
						</Link>
						.
					</Text>
					<Text style={styles.para}>
						The website allows users to purchase mobile travel guides for a selected city, either
						individually or combined with public transportation tickets. Third parties, such as
						physical retailers, online retailers, and travel booking websites, may sell the Content.
						Best in Rome Tour cannot be responsible for any obligations arising from these
						transactions. Users are subject to their terms and conditions.
					</Text>
					<Text style={styles.title}>1. The limited license</Text>
					<Text style={styles.para}>
						Best in Rome Tour grants a limited license to access the Website and BIRT App, subject
						to Terms and Conditions and Privacy Notice. Access may include third-party fees, and
						users are responsible for personal, non-commercial use, not allowing others to use their
						accounts.
					</Text>
					<Text style={styles.title}>2. The BIRT App</Text>
					<Text style={styles.para}>
						Best in Rome Tour offers the BIRT App for iOS and Android mobile devices, available for
						free download through the Apple or Android App Store. The app is compatible with iOS
						devices from version 4.1 and Android devices from version 8. To use the website and app,
						users must have a supported web browser. Best in Rome Tour may modify or terminate the
						app at any time without notice, and may not allow access after one year after
						downloading from the App Store.
					</Text>
					<Text style={styles.title}>3. Languages</Text>
					<Text style={styles.para}>
						The Digital Content is available in one place only upon purchase and can be modified or
						terminated at any time without prior consent. Users can download the content once in the
						selected language. They can cancel the content from their app and re-download it in a
						different language on the same device.
					</Text>
					<Text style={styles.title}>4. Eligibility</Text>
					<Text style={styles.para}>
						Purchases on the Website and App require users to be 18 or older, and they must have the
						necessary rights and capacity to use the App in compliance with applicable laws. The
						information submitted must be truthful and accurate, and access to the App may be
						terminated without prior notice if untrue, inaccurate, not current, or incomplete. Users
						are responsible for maintaining confidentiality of their information, including
						passwords, and Best in Rome Tour cannot be held liable for damages resulting from the
						App's use. The App is not suitable for children without adult supervision, and Best in
						Rome Tour cannot be held responsible for breaching this provision.
					</Text>
					<Text style={styles.title}>5. Intellectual property</Text>
					<Text style={styles.para}>
						Best in Rome Tour owns the digital content and information on its App and Website,
						including communications, disclaimers, data, and other materials. The platform and its
						services are proprietary and subject to intellectual copyrights. Users are prohibited
						from modifying, distributing, decrypting, performing, copying, reproducing,
						transferring, transmitting, or reselling any information, software, products, or
						services obtained through the App and Website. The App and Website may display content
						provided by third parties, which may be protected by copyright, trademark, or other
						laws. These terms do not grant users rights to use or permanent disposal of such
						content.
					</Text>
					<Text style={styles.title}>6. Warranties</Text>
					<Text style={styles.para}>
						Best in Rome Tour provides services and features through its App and website, which are
						used with the scope permitted by valid legislation and at the user's own risk. The App
						is provided on an "as is, as available" basis and Best in Rome Tour does not grant
						warranties on the digital content, its effects on users, or its interpretation or use.
						The company is not responsible for the accuracy, copyright compliance, legality, or
						decency of the material provided or accessed through its Service, App, and Website. Best
						in Rome Tour does not guarantee the BIRT software's accuracy, operation, or
						compatibility with any device, software, applications, and services. The App may use
						third-party data for transport information and recommendations, and all travel and
						transport times are estimates, based on external factors. The company cannot be held
						responsible for the terms, validity, and user conditions of the transport company, and
						travel tickets are subject to the terms, validity, and user conditions.
					</Text>
					<Text style={styles.para}>
						Best in Rome Tour's App is not suitable for use in situations where content, data, or
						information may result in danger, death, injury, or serious health detriment. The App
						does not represent or warrant that moving in such destinations is advisable or without
						risk. The App may contain advertisements and links to external websites operated by
						parties other than Best in Rome Tour, and Best in Rome Tour is not responsible for their
						contents, availability, or accuracy. The App is not responsible for any loss suffered or
						alleged to be suffered in connection with the use of or reliance upon such content,
						advertising, products, services, or other resources made available by such external
						websites. All content is the sole responsibility of the person who originated it, and
						Best in Rome Tour does not guarantee the authenticity of any content or data provided
						through the App.
					</Text>
					<Text style={styles.title}>7. Liability Limitations</Text>
					<Text style={styles.para}>
						Best in Rome Tour is not liable for any damages arising from the use of the Service,
						Website, or App. Users release Best in Rome Tour from any liability related to their
						conduct in connection with the Service. The App may cause distractions or dangerous
						situations, and users are responsible for their safe movement in public spaces, walking,
						driving, cycling, and using public transportation. Best in Rome Tour ensures that all
						descriptions of products and services on the Website and App are up-to-date, but cannot
						be held responsible for incorrect information related to digital content. The App is not
						liable for unavailability of pedestrian sidewalks, absence of hindrances, public
						transport line suspensions, route changes, traffic deviations, or other inaccuracies.
						Users should not use the App if specific circumstances do not permit safe use.
					</Text>
					<Text style={styles.title}>8. Governing Law and exclusive jurisdiction</Text>
					<Text style={styles.para}>
						This Agreement is governed by Italian legislation and applicable law, with disputes
						regarding interpretation, validity, or performance assigned to the exclusive
						jurisdiction of the Court of Milano.
					</Text>
					<Text style={styles.title}>9. Termination</Text>
					<Text style={styles.para}>
						Best in Rome Tour reserves the right to terminate the Service at any time, for any
						reason, without prior notice, and to modify these Terms and Conditions at any time.
					</Text>
					<Text style={styles.title}>10. Contact information</Text>
					<Text style={[styles.para, {marginBottom: 20}]}>
						To express any comments or questions regarding the Terms and Conditions of Use, please
						email <Text style={styles.contact}>contact@bestinrometour.com</Text>
					</Text>
				</View>
			</Container>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	page: {
		gap: 20,
	},
	para: {
		fontFamily: 'Regular',
		fontSize: fontSize.sm,
		lineHeight: 25,
	},
	contact: {
		fontFamily: 'Regular',
		color: colors.primary,
	},
	title: {
		fontFamily: 'Bold',
		fontSize: fontSize.lg,
	},
})
