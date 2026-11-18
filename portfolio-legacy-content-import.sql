-- One-time import of the portfolio content currently hard-coded in the website.
-- Safe to re-run: existing records are not overwritten.

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'Fee-Schedule Automation','fee-schedule-automation','APPLIED AI · MOODY’S RATINGS','A multi-stage AI workflow that extracts pricing data from complex PDFs, supports human review and approvals, and publishes structured updates to downstream billing systems.',array['Multimodal AI','Workflow automation','Human-in-the-loop']::text[],'~75% lower turnaround time','[{"label":"PROJECT NOTES","href":"#contact"}]'::jsonb,true,1,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='fee-schedule-automation');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'EEDO','eedo','GLOBAL WINNER · TECHNOVATION 2018','A platform connecting electronic-waste generators with authorised recyclers, making responsible disposal easier to discover and act on.',array['Circular economy','Social impact','Mobile product']::text[],'Global winner · $15,000 Gold Scholarship','[{"label":"PRESS & STORY","href":"#journey"}]'::jsonb,true,2,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='eedo');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'QEasy','qeasy','COVID-ERA PRODUCT · 2020','A virtual queue-management concept built after speaking with neighbourhood shopkeepers and consumers about crowding and long waits. Tested with 50+ shopkeepers and 100 consumers.',array['User discovery','Local commerce','Product design']::text[],'Incubation & ecosystem recognition','[{"label":"PROJECT EVIDENCE","href":"#journey"}]'::jsonb,true,3,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='qeasy');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'i-Code & ORO','i-code-oro','CYBER SAFETY · COMMUNITY INITIATIVE','A cyber-safety education initiative paired with an app for awareness resources and access to cyber-expert consultation. Workshops covered cyberbullying, phishing, scams and digital safety.',array['Digital safety','Education','Community']::text[],'10,000+ children reached','[{"label":"WORKSHOP VIDEO","href":"https://youtu.be/OQTiXSkcFjM"}]'::jsonb,true,4,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='i-code-oro');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'HuntMyHead','huntmyhead','INDEPENDENT PRODUCT · IN PROGRESS','An AI-assisted job-search workspace designed to turn scattered applications, research and follow-ups into a more intentional opportunity pipeline.',array['AI agents','Product thinking','Automation']::text[],'Building in public','[{"label":"PROJECT NOTES","href":"#workbench"}]'::jsonb,true,5,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='huntmyhead');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'PIVerse','piverse','PROCESS INTELLIGENCE · IN PROGRESS','An exploration into reconstructing business workflows, finding bottlenecks and simulating where human-led, automated or agent-assisted processes make sense.',array['Process intelligence','What-if simulation','AI transformation']::text[],'In progress','[{"label":"PROJECT NOTES","href":"#workbench"}]'::jsonb,true,6,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='piverse');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'EmoQuest','emoquest','BEHAVIOURAL TECHNOLOGY','An affective behaviour-tracking system using game environments to study signals such as avoidance, reaction latency and expressive positivity.',array['Behavioural signals','Game environments','Data']::text[],'Academic / research project','[{"label":"ADD PROJECT LINK","href":"#contact"}]'::jsonb,false,7,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='emoquest');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'EduSight','edusight','EDTECH · ACADEMIC ANALYTICS','An academic monitoring and anomaly-detection project exploring automated attendance tracking and grading insights.',array['Education technology','Monitoring','Anomaly detection']::text[],'Academic / product project','[{"label":"ADD PROJECT LINK","href":"#contact"}]'::jsonb,false,8,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='edusight');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'Girls in Technology','girls-in-technology','SOCIAL IMPACT · EARLY INITIATIVE','Student-led mentoring and workshops that introduced girls to app development, computational thinking and technology, alongside Technovation ambassador work.',array['Mentoring','Technology access','Community']::text[],'1,000+ girls reached','[{"label":"ADD PROJECT EVIDENCE","href":"#journey"}]'::jsonb,false,9,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='girls-in-technology');

insert into public.portfolio_projects (name,slug,type,description,tags,result,links,featured,sort_order,media)
select 'ORO Cyber Safety App','oro-cyber-safety-app','CYBER SAFETY · PRODUCT CONCEPT','A cybercrime redressal and awareness concept offering safety resources, articles, quizzes and access to expert consultation.',array['Cyber safety','Digital citizenship','Product']::text[],'Recognition from cyber-safety ecosystem','[{"label":"ADD PROJECT EVIDENCE","href":"#journey"}]'::jsonb,false,10,'[]'::jsonb
where not exists (select 1 from public.portfolio_projects where slug='oro-cyber-safety-app');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select 'Class 6','The first film · the first spark','The beginning of an early curiosity about making things and telling stories through technology. Original film, photos and the clipping will be added here.','ORIGINAL FILM · PHOTO · PRESS PLACEHOLDER',null,null,null,1,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='Class 6' and title='The first film · the first spark');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2016','Google Code to Learn · National Winner','An early app-building experiment that earned national recognition while I was still at school.','VIDEO + PRESS','/evidence/early-press-2016.jpg','https://www.youtube.com/watch?v=1cmWokmsfP4',null,2,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2016' and title='Google Code to Learn · National Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2017','Google Code to Learn · Finalist','Continued building and competing through Google’s student technology programme.','PRESS CLIPPING','/evidence/google-code-to-learn-press.jpg',null,null,3,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2017' and title='Google Code to Learn · Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2018','Technovation · Global Winner & Senior Gold Scholarship','Led the team behind EEDO to the World Pitch Summit in San Francisco. The team received the $15,000 Gold Scholarship and represented India on the global stage.','TEAM PHOTO · PRESS · VIDEO','/evidence/global-winner-team.jpg','https://blog.adobe.com/en/publish/2018/08/01/adobe-mentored-team-wins-gold-at-technovation-world-summit.html','https://www.goodmorningamerica.com/culture/story/super-smart-teen-girls-india-invented-app-deal-58412285',4,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2018' and title='Technovation · Global Winner & Senior Gold Scholarship');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','Global and national innovation showcases','Global Winner at Coolest Projects; Global Finalist at i-Create and the Paradigm Challenge; invited to the Diamond Challenge in Delaware; Winner at Nava Bharat Educational Confluence and National Science Concours. Also completed a task in Google Code-in 2018.','CERTIFICATES · PRESS','/evidence/global-stage-press.jpg',null,null,5,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='Global and national innovation showcases');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','Building for communities during COVID','Built QEasy around safer, more organised queues. Also recognised as National Finalist at HackCOVID (IIM), YuWaah Challenge and Heroes of Tomorrow; Top 6 runner-up at Glocal Teen Hero India; National Runner-up at CReo; showcased at Coolest Projects; received a pre-incubation opportunity with AGBI.','PROJECT MATERIAL · CERTIFICATES','/evidence/press-feature-2018.jpg',null,null,6,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='Building for communities during COVID');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2021','A year of national and international recognition','Winner of India’s Future Founders Competition (UQ Ventures); Winner of Study with Australia Video Competition; Winner of eRaksha, Tech Avishkar category. Continued cyber-safety and technology education work.','CERTIFICATES · PRESS · VIDEO',null,'https://ventures.uq.edu.au/blog/2022/03/high-school-students-discover-inner-entrepreneur','https://www.eraksha.net/hall-of-fame-2020/',7,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2021' and title='A year of national and international recognition');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2022–25','Computer Science, building and community leadership','B.Tech in Computer Science at JIIT, Noida. Continued product and engineering experiments and was selected among the top 10 global representatives on the Technovation Alumnae Leadership Board.','COLLEGE · PROJECTS · LEADERSHIP',null,null,null,8,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2022–25' and title='Computer Science, building and community leadership');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2025','From prototypes to applied AI','Worked across full-stack development, generative AI and automation, including product and workflow experiments with FutureLift, IBM x NASSCOM and Supanote.ai.','INTERNSHIPS · PROJECTS',null,null,null,9,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2025' and title='From prototypes to applied AI');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2026','Moody’s Tech Verse Challenge · Runner-up','Identified an organisational challenge, conceptualised an AI-driven solution and led its end-to-end workflow development and presentation to senior leadership in Moody’s organisation-wide hackathon.','TEAM PHOTO · PRESENTATION · RECOGNITION',null,null,null,10,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2026' and title='Moody’s Tech Verse Challenge · Runner-up');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2026','AI Product Analyst Intern · Moody’s Ratings','Building AI-enabled workflow systems for enterprise use, including fee-schedule automation with document extraction, review, approvals and publishing.','PROJECT EVIDENCE · RECOMMENDATION',null,null,null,11,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2026' and title='AI Product Analyst Intern · Moody’s Ratings');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','Coolest Projects · Global Winner','Selected as a global winner at Raspberry Pi’s Coolest Projects and invited to the USA.','CERTIFICATE · PROJECT VIDEO',null,null,null,12,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='Coolest Projects · Global Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','i-Create Global Student Innovation Challenge · Global Finalist','Recognised as a global finalist and invited to Canberra, Australia.','CERTIFICATE · PRESS',null,null,null,13,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='i-Create Global Student Innovation Challenge · Global Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','Diamond Challenge · Global Finalist','Selected as a global finalist and invited to Delaware, USA.','CERTIFICATE · PROJECT MATERIAL',null,null,null,14,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='Diamond Challenge · Global Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','Nava Bharat Educational Confluence · Winner','Won at the 2019 educational confluence hosted by Amity University, Noida.','CERTIFICATE · PHOTOGRAPH',null,null,null,15,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='Nava Bharat Educational Confluence · Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','National Science Concours · Winner','Won the 2019 National Science Concours.','CERTIFICATE · PHOTOGRAPH',null,null,null,16,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='National Science Concours · Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','Heroes of Tomorrow · National Finalist','Selected among the national finalists from 2,200+ entries.','CERTIFICATE · PRESS',null,null,null,17,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='Heroes of Tomorrow · National Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','Glocal Teen Hero India · Runner-up','Selected among the top six finalists across India.','CERTIFICATE · PHOTOGRAPH',null,null,null,18,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='Glocal Teen Hero India · Runner-up');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','YuWaah Challenge / Design for Change · National Finalist','Selected as a national finalist for the challenge.','CERTIFICATE · PROJECT EVIDENCE',null,null,null,19,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='YuWaah Challenge / Design for Change · National Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','CReo Entrepreneurship Competition · National Runner-up','Recognised as national runner-up in the CReo entrepreneurship competition.','CERTIFICATE · PRESENTATION',null,null,null,20,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='CReo Entrepreneurship Competition · National Runner-up');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','Coolest Projects · Project Showcase','Project selected for showcase at Coolest Projects 2020.','PROJECT VIDEO · SHOWCASE',null,null,null,21,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='Coolest Projects · Project Showcase');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','AGBI · Pre-incubation opportunity','Received a pre-incubation opportunity through AGBI at Great Lakes University.','LETTER · PROGRAMME EVIDENCE',null,null,null,22,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='AGBI · Pre-incubation opportunity');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020','HackCOVID · National Finalist','Selected as a national finalist in the HackCOVID challenge hosted by IIM.','CERTIFICATE · PROJECT MATERIAL',null,null,null,23,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020' and title='HackCOVID · National Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020–21','Study with Australia Video Competition · Winner','International winner, recognised by the Australian Trade and Investment Commission.','CERTIFICATE · VIDEO',null,null,null,24,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020–21' and title='Study with Australia Video Competition · Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2020–21','eRaksha · Tech Avishkar Category Winner','Won the Tech Avishkar category at the eRaksha competition.','HALL OF FAME · CERTIFICATE',null,'https://www.eraksha.net/hall-of-fame-2020/',null,25,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2020–21' and title='eRaksha · Tech Avishkar Category Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2021','India’s Future Founders Competition · Global Winner','Winner of the University of Queensland Ventures competition.','UNIVERSITY FEATURE · CERTIFICATE',null,'https://ventures.uq.edu.au/blog/2022/03/high-school-students-discover-inner-entrepreneur',null,26,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2021' and title='India’s Future Founders Competition · Global Winner');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2019','Mai Bharat Bol Raha Hu · National Finalist','Selected among the top 20 national finalists.','CERTIFICATE · MEDIA',null,null,null,27,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2019' and title='Mai Bharat Bol Raha Hu · National Finalist');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2018','Google Code-in · Task Completer','Completed a task in Google Code-in.','CERTIFICATE',null,null,null,28,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2018' and title='Google Code-in · Task Completer');

insert into public.portfolio_achievements (year,title,body,kind,evidence_url,video_url,press_url,sort_order,media)
select '2018','Technovation World Pitch Summit · Global Winner','Represented India with EEDO at the global summit in San Francisco. The team won the Senior Division Gold Scholarship.','PRESS · TEAM PHOTO · VIDEO',null,'https://www.goodmorningamerica.com/culture/story/super-smart-teen-girls-india-invented-app-deal-58412285','https://blog.adobe.com/en/publish/2018/08/01/adobe-mentored-team-wins-gold-at-technovation-world-summit.html',29,'[]'::jsonb
where not exists (select 1 from public.portfolio_achievements where year='2018' and title='Technovation World Pitch Summit · Global Winner');

