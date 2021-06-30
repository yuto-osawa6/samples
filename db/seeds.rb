# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





              Ahome.create!(
                title:  "あなたのチームに",
                title2: "クリエイターを最短で",
                discribe: "全く新しい 月額制 の受託スタイル",
                button_right: "お問い合わせ",
                button_left: "月額プランをみる",

                url_right: "",
                url_left: ""
              )

              Bhome.create!(
                title:"CINEMATO（シネマト）は、動画で企業の経営課題を解決する",
                title2:"動画マーケティング総合支援サービス。",
                discribe:"動画制作・映像制作、広告運用支援、広告パフォーマンス改善、コンサルティングをワンストップで対応できます。",

              )

              Bbhome.create([{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",bhome_id:"1"} ])

              Chome.create!(
                title:"CINEMATO（シネマト）は、動画で企業の経営課題を解決する",
                title2:"動画マーケティング総合支援サービス。",
                discribe:"動画制作・映像制作、広告運用支援、広告パフォーマンス改善、コンサルティングをワンストップで対応できます。",

              )

              Dhome.create!(
                title:"CINEMATO（シネマト）は、動画で企業の経営課題を解決する",
                title2:"動画マーケティング総合支援サービス。",
                discribe2:"動画制作・映像制作、広告運用支援、広告パフォーマンス改善、コンサルティングをワンストップで対応できます。",
                discribe:"動画制作・映像制作、広告運用支援、広告パフォーマンス改善、コンサルティングをワンストップで対応できます。",

              )

              Ehome.create!(

                title:"CINEMATO（シネマト）は、動画で企業の経営課題を解決する",
                discribe:"動画制作・映像制作、広告運用支援、広告パフォーマンス改善、コンサルティングをワンストップで対応できます。",

              )

              Fhome.create!(
                title:"メリット",
                title2:"価値を映す",
                discribe:"クレーンやレール、サーモグラフィや高速度撮影用カメラなどを使用し、通常の人間の視点では、見ることのできない映像を表現します。"

              )

              Ffhome.create!([{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"},{title: "動画広告配信",discribe:"Youtube、GSN、YDN、SNS、TikTok、タクシー広告など、目的に合わせて適切な媒体の選定・配信を行います。",fhome_id:"1"} ])

              Ihome.create!(
                title:"豊富なプランをご用意。",
                title2:"特定領域だけの対応から全領域の一貫対応まで、",
                title3:"あなたのチームに最適なプランをお選びください。"
              )

              Iihome.create!([{
                title:"Plan.A",
                discribe:"デザイナーのみ、エンジニアのみなど チーム体制に合わせた必要領域の 補強に特化したプラン",
                colum1:"チーム状況に応じたスポット対応",
                colum2:"お好きな領域の選択が可能",
                colum3:"TAGの試験的な導入として人気",
                price:"月額 ¥300,000 (3ヶ月更新)",
                ihome_id:1
              },
              {
                title:"Plan.A",
                discribe:"デザイナーのみ、エンジニアのみなど チーム体制に合わせた必要領域の 補強に特化したプラン",
                colum1:"チーム状況に応じたスポット対応",
                colum2:"お好きな領域の選択が可能",
                colum3:"TAGの試験的な導入として人気",
                price:"月額 ¥300,000 (3ヶ月更新)",
                ihome_id:1

              },
              {
                title:"Plan.A",
                discribe:"デザイナーのみ、エンジニアのみなど チーム体制に合わせた必要領域の 補強に特化したプラン",
                colum1:"チーム状況に応じたスポット対応",
                colum2:"お好きな領域の選択が可能",
                colum3:"TAGの試験的な導入として人気",
                price:"月額 ¥300,000 (3ヶ月更新)",
                ihome_id:1
              }
            ])

            Aahome.create!(
            [{
              menu:"SERVICE",
              mainmenu:"サービス紹介",
              ahome_id:1,
              link:"#aa",
            },{
              menu:"WORKS",
              mainmenu:"映像制作実績",
              ahome_id:1,
              link:"#ac",
            },{
              menu:"INTERVIEW",
              mainmenu:"お客様の声",
              ahome_id:1,
              link:"#ad",
            },{
              menu:"PRICE",
              mainmenu:"料金",
              ahome_id:1,
              link:"#ae",

            },{
              menu:"FILM MONKEY",
              mainmenu:"フィルムモンキーとは",
              ahome_id:1,
              link:"#ab",
            },
            # {
            #   menu:"BLOG",
            #   mainmenu:"ブログ",
            #   ahome_id:1
            #   link:"#af"
            # },
            {
              id:7
              menu:"CONTACT",
              mainmenu:"お問い合わせ",
              ahome_id:1,
              link:"#ag",
            }   
          
          ]
            )

              



