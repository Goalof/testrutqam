import React from "react";
import theme from "theme";
import { Theme, Icon, Link, Text, List, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowLeft } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vacancies/middle-email-marketolog"} />
		<Helmet>
			<title>
				Middle Email-маркетолог (Проект RuSender)
			</title>
			<meta name={"description"} content={"Зачем мы ищем нового сотрудника: чтобы разгрузить CPO от операционных задач и помочь развивать ключевой продукт RuSender.\n\nМы готовы рассмотреть специалистов с опытом от junior в email/crm-маркетинге."} />
			<meta property={"og:title"} content={"Middle Email-маркетолог (Проект RuSender)"} />
			<meta property={"og:description"} content={"Зачем мы ищем нового сотрудника: чтобы разгрузить CPO от операционных задач и помочь развивать ключевой продукт RuSender.\n\nМы готовы рассмотреть специалистов с опытом от junior в email/crm-маркетинге."} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} />
			<meta name={"msapplication-TileColor"} content={"#5291FA"} />
		</Helmet>
		<Components.Header />
		<Section padding="140px 0 60px 0" sm-padding="110px 0 40px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem display="flex" width="100%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Link
						text-decoration-line="initial"
						font="14px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s linear 0s"
						hover-color="#3d72cc"
						display="flex"
						className="noprint"
						margin="0px 0px 20px 0px"
						href="/vacancies"
						color="#4a8cfa"
					>
						<Icon
							color="inherit"
							size="20px"
							margin="-1px 2px 0px -2px"
							hover-color="inherit"
							category="md"
							icon={MdKeyboardArrowLeft}
						/>
						К списку вакансий
					</Link>
					<Text
						margin="0px 0px 25px -3px"
						display="inline-block"
						sm-margin="0px 0px 20px 0px"
						text-align="left"
						color="#263238"
						sm-font="normal 500 40px/1.2 'AvenirNextCyrDemi', sans-serif"
						as="h1"
						font="normal 500 44px/1.2 'AvenirNextCyrDemi', sans-serif"
					>
						Middle Email-маркетолог (Проект RuSender)
					</Text>
					<Text
						sm-margin="0px 0px 10px 0px"
						text-align="center"
						color="#333"
						letter-spacing=".2"
						font="normal 400 18px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="0px 0px 20px 0px"
						display="inline-block"
					>
						Проект RuSender | Удаленная работа
					</Text>
					<Text
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 0px 0px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
					>
						Мы — аккредитованная IT-компания, которая уже 19 лет создает онлайн-продукты (uCoz, uKit, WebAsk и др.). Сейчас мы активно развиваем нашу собственную ESP-систему RuSender и ищем специалиста, который возьмет на себя полный цикл email- и директ-коммуникаций для наших проектов и будет вместе с нами совершенствовать внутренние инструменты рассылок.
						<br />
						<br />
						Наша база — более 35 миллионов email-адресов и около миллиона активных пользователей, которые действительно любят получать полезные сообщения. Если вы хотите не только вести рассылки, но и развиваться в сфере продуктового маркетинга, помогая строить и совершенствовать сервис на стеке собственных технологий, — будем рады познакомиться!{"\n\n"}
					</Text>
					<Text
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="24px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
					>
						Чем предстоит заниматься
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Работа с базой клиентов: анализ и сегментация аудитории, проработка гипотез для повышения вовлеченности, создание и отправка персонализированных email-рассылок
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Управление рассылками и письмами: настройка триггерных цепочек, включая сценарии писем, проведение A/B-тестирований, оптимизация шаблонов и контента.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Техническая поддержка доставляемости: настройка и контроль параметров SPF, DKIM, DMARC и других доменных настроек, мониторинг и анализ показателей Postmaster (Mail.Ru, Google и др.), оперативное решение вопросов с блокировками и блеклистами.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Аналитика и оптимизация: отслеживание основных метрик рассылок (открываемость, кликабельность, конверсия, отказы и др.), поиск точек роста, формирование идей и реализация улучшений для увеличения продаж и других бизнес-метрик. Построение грамотных отчетов и аналитики на основе всех этих данных.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Развитие внутренней платформы RuSender: участие в продуктовых задачах: улучшение функционала, помощь нашей команде в обеспечении бесперебойной доставки писем, совместная работа с командой разработчиков, постановка и проверка гипотез по совершенствованию инструментов рассылки.
						</Text>
					</List>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Вникание во внутренние аспекты процесса отправки рассылки: от загрузки базы контактов до завершения рассылки и отчетов о доставке. Понимание как устроен каждый шаг рассылки в RuSender изнутри — не только как пользователь, но и как технический специалист.
						</Text>
					</List>
					<Text
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
					>
						Что важно уметь и знать
					</Text>
					<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Практический опыт работы с email кампаниями: создание, настройка, сегментация, анализ.
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Верстка писем и базовые знания HTML/CSS — умение создавать шаблоны, которые корректно отображаются в разных почтовых клиентах и браузерах и знание современных продуктов для верстки и тестирования корректного отображения писем.
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Основы deliverability: настройка и анализ SPF, DKIM, DMARC, понимание разницы между hard bounce и soft bounce, мониторинг репутации домена. Владение инструментами оценки доставляемости.
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Понимание метрик и аналитики: умение работать с Postmaster (Mail.Ru, Gmail и др.), анализировать открываемость, кликабельность, конверсию, отказы.
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Английский язык на уровне B2 (Upper-Intermediate) или выше — для чтения технической документации и общения с зарубежными сервисами.
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Желание выходить за рамки email-маркетинга — если у вас есть смежные компетенции (SMM, веб-аналитика и др.) и вы хотите их развивать, мы готовы поддержать.
						</Text>
					</List>
					<Text
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 18px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
						color="#333"
					>
						Что будет преимуществом
						<br />
						{"\n\n"}
					</Text>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Опыт работы с CDP-платформами или инструментами автоматизации customer journey.
							<br />
							{"\n\n"}
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Знание методов тестирования гипотез (A/B, multivariate, контрольные группы и пр.).
						</Text>
					</List>
					<List padding="0px 0px 0px 20px" margin="0px 0px 0px 0px">
						<Text font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 12px 5px">
							Навык работы с drag-and-drop конструкторами писем (Unlayer, Stripo и т.п.) и сервисами тестирования верстки.
						</Text>
					</List>
					<Text
						color="#333"
						letter-spacing=".2"
						font="normal 400 20px/1.2 'AvenirNextCyrMedium', sans-serif"
						margin="20px 0px 12px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						text-align="left"
					>
						Условия:
						<br />
					</Text>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
					>
						<Image
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Официальное трудоустройство по ТК РФ или ГПХ при необходимости.
						</Text>
					</Box>
					<Box
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
					>
						<Image
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Высокая “белая” заработная плата + бонусы за достижение целей и успехи на проекте.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Формат работы: полностью удаленная работа или гибридный/офисный формат (в Ростове-на-Дону или Баку).
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Расширенная ДМС для сотрудников в РФ.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Современная техника и комфортное рабочее место.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Профессиональный рост: участие в конференциях, доступ к корпоративной библиотеке, поддержка обучения.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Культура открытости и доверия: нет систем контроля времени, важен результат, а не “отсиженные” часы.
						</Text>
					</Box>
					<Box
						display="flex"
						align-items="center"
						margin="0px 0px 6px 0px"
						lg-align-items="flex-start"
						lg-padding="0px 0px 0px 0px"
					>
						<Image
							src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tick.svg?v=2021-02-04T00:08:19.533Z"
							width="15px"
							height="12px"
							padding="0px 0px 0px 0px"
							margin="0px 10px 0px 0px"
							lg-margin="12px 10px 0px 0px"
						/>
						<Text margin="6px 0px 6px 0px" font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif">
							Работа в сильной команде опытных специалистов, у которых можно многому научиться.
						</Text>
					</Box>
					<Text
						font="normal 400 16px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="20px 0px 0px 0px"
						display="inline-block"
						sm-margin="10px 0px 20px 0px"
						letter-spacing="0.3px"
						color="#333"
					>
						Если вам близок мир высоконагруженных рассылок, вы умеете делать письма, которыми восхищаются и Gmail, и придирчивая филолог Наталья Петровна, и простой работяга Василий, — присоединяйтесь к нам!
						<br />
						<br />
						Ждем вас, чтобы вместе улучшать продукт и делать коммуникации для наших пользователей еще эффективнее и интереснее.{"\n\n\n\n"}
					</Text>
					<Components.PopUp
						left="-30px"
						bottom="auto"
						right="auto"
						top="40%"
						transition="all 0.5s ease 0s"
					>
						<Override
							slot="close"
							padding="0.7rem 0.7rem .5rem .5rem"
							size="20px"
							hover-color="#333"
							transition="color 0.3s ease 0s"
							color="#c5cfdb"
						/>
						<Override
							slot="button"
							right="auto"
							top="40%"
							letter-spacing=".1px"
							font="normal 500 16px/50px 'AvenirNextCyrMedium', sans-serif"
							background="#ffd83a"
							padding="0px 15px 0px 15px"
							left="-30px"
							bottom="auto"
							border-radius="5px"
							color="#263238"
							hover-left="0px"
							hover-background="#e6c235"
							transition="all 0.2s linear 0s"
							margin="30px 0px 10px 0px"
						>
							Откликнуться на вакансию
						</Override>
						<Override
							slot="wrapper"
							max-width="672px"
							width="100%"
							margin="0px 0px 0px 0px"
							height="100%"
							overflow-y="scroll"
							background="#ffffff"
							padding="0px 0px 0px 0px"
							border-radius="0px"
							max-height="1150px"
						/>
						<Section padding="0px 0 40px 0">
							<Override slot="SectionContent" align-items="center" width="100%" />
							<Components.EmbedHTML width="100%" />
							<Components.EmbedJS />
						</Section>
					</Components.PopUp>
					{"    "}
				</StackItem>
				<Components.SocialPrint />
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<RawHtml>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
			<meta name={"yandex-verification"} content={"7ac9fd5fa6a12f5d"} place={"endOfHead"} rawKey={"604a10bbd967a07a086ed553"} />
			<meta name={"google-site-verification"} content={"kg7CxTxZRGHaVD8XLuJEWXRQn5pApLyI2aLAmjVtk4U"} place={"endOfHead"} rawKey={"604a6ae061f09e11051188d1"} />
			<script place={"endOfHead"} rawKey={"607d5e128c5b715c34cc6769"}>
				{"(function(w, d, s, l, i) {\n    if (w[l]) return;\n\n    w[l] = w[l] || [];\n    w[l].push({\n        'gtm.start': new Date().getTime(),\n        event: 'gtm.js'\n    });\n    var f = d.getElementsByTagName(s)[0],\n        j = d.createElement(s),\n        dl = l != 'dataLayer' ? '&l=' + l : '';\n    j.async = true;\n    j.src =\n        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n    f.parentNode.insertBefore(j, f);\n})(window, document, 'script', 'dataLayer', 'GTM-MS77SWK5');"}
			</script>
			<meta
				charset={""}
				name={"facebook-domain-verification"}
				content={"3k8kfynnwa8cp30e13qj1ppei7kh1f"}
				place={"endOfHead"}
				rawKey={"6086e36e344c4251dc26bfe2"}
			/>
			<style place={"endOfHead"} rawKey={"601c3c7d7571e39a08c18a0b"}>
				{"@media (min-width: 1200px) {\n* {\n    scroll-behavior: smooth;\n    }\n    }\n  .active .fileText {\n  display: none;\n  }\n  input.fileText {\n      opacity: 1 !important;\n  }\n  * {\n    -webkit-tap-highlight-color: transparent!important;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrRegular';\n    src: url('/fonts/AvenirNextCyr-Regular.eot');\n    src: url('/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrMedium';\n    src: url('/fonts/AvenirNextCyr-Medium.eot');\n    src: url('/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrBold';\n    src: url('/fonts/AvenirNextCyr-Bold.eot');\n    src: url('/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  @font-face {\n    font-family: 'AvenirNextCyrDemi';\n    src: url('/fonts/AvenirNextCyr-Demi.otf');\n    font-weight: normal;\n    font-style: normal;\n    font-display: auto;\n  }\n  body {\n    font-family: 'AvenirNextCyrRegular', sans-serif;\n    font-weight: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n:focus {\n  outline: none;\n}\n\n.nobutton {\npointer-events: none; \n} "}
			</style>
		</RawHtml>
	</Theme>;
});