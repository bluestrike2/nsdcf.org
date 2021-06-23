+++
type        = "event"
title       = "First Annual Knight of Distinguished Alumni"
titleAlt    = "Join Us in Celebrating a Knight of Distinguished Alumni"
shortTitle  = "Knight of Distinguished Alumni"
organizer   = "Norwin Alumni & Friends Association"
# Remember to adjust eventDate to reflect the appropriate date and time.
eventComplete = true
# EventStatus Type - https://schema.org/EventStatusType
# Valid states:
# => EventCancelled
# => EventMovedOnline
# => EventPostponed
# => EventRescheduled
# => EventScheduled (Default state)
eventStatus = "EventScheduled"
eventDate     = "2017-05-23T17:30:00-05:00"
eventDoorTime = "2017-05-23T17:30:00-05:00"
eventEndDate  = "2017-05-23T21:00:00-05:00"
ticketsAvailable = false
# Remember to change ticket deadline date to appropriate deadline for RSVPs. After this date, the ticket order form will be disabled the next time the site is built.
ticketsDeadlineDate = "2017-05-23T23:59:00-05:00"

aliases     = ["/news/distinguished-alumni-2018"]
date        = "2017-05-24T12:01:00+00:00"
description = ""
draft       = false
layout      = "event"
"news/categories" = ["Alumni","Events"]

[[ticketOptions]]
  name       = "Individual Reservation"
  price      = "38.15"
  serviceFee = "1.15"

[[ticketOptions]]
  name        = "Child Reservation"
  description = "For children ages 4-10"
  price       = "19.00"
  serviceFee  = "1.15"

[tickets]
  childAges    = "Ages 4-10"
  childPrice   = "19.00"
  price        = "37.00"
  serviceFee   = "1.15"
  name        = "Individual Reservation"

[sections.creditsIntro]
  title = "Credits"

[[sections.credits]]
  [[sections.credits]]
  name = "Mr. Robert 'Bo' Garitano"
  role = "Event Emcee"

  [[sections.credits]]
  name  = "Music Over the Decades provided by Mr. Al Bergman, '78"
  role = "Music"

[[sections.recipientsIntro]]
  title   = "Our 2017 Distinguished Alumni"
  content = "Since 1952, the Norwin School District has graduated tens of thousands of students, many of whom have gone on to change the world, touching the lives of their fellow man. The NSDCF is proud to honor the following individuals for their outstanding achievements:"

[sections.schedule_intro]
  title = "Event Schedule"

[[sections.schedule]]
  [[sections.schedule]]
    title = "Cocktails and Cash Bar"
    time  = "2017-05-24T17:30:00-05:00"
  [[sections.schedule]]
    title = "Buffet Dinner"
    time  = "2017-05-24T18:30:00-05:00"
  [[sections.schedule]]
    title   = "Distinguished Alumni Awards and Scholarship Presentations"
    content = "After Dinner"

[[sections.misc]]
  title   = "Support the NSDCF"
  content = "The NSDCF will offer a Chinese auction and raffle tickets for attendees wishing to voluntarily support future endeavors of the Association."

[[sections.misc]]
  title   = "Questions"
  content = "Please [email us](mailto:alumni@nsdcf.org) with any further questions or concerns regarding the event."

[[sections.venue]]
  title   = "Event Venue"
  name    = "Stratigos Banquet Center"
  street  = "131 Colonial Manor Road"
  city    = "North Huntingdon"
  state   = "Pennsylvania"
  postal  = "15642"

[[resources]]
  name = "featured"
  src  = "img/mast.jpg"

[[resources]]
  src  = "recipients/*.md"
  name = "recipient-:counter"

# [[resources]]
#   src  = "recipients/*.jpg"
#   name = "recipient-photo:counter"

[[resources]]
  name  = "reservations"
  src   = "docs/reservations-alumni-2018.pdf"
  title = "Reservation Form"
  [resources.params]
    icon = "pdf"
+++

On the evening of May 24, two-hundred and fourteen guests came together to celebrate the lifetime accomplishments of ten Distinguished Norwin Alumni, one Distinguished Friend of Norwin, and our graduating NAFA Scholarship recipient.
