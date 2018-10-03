+++
{{ $eventDate := (now.Format "2006-01-02T15:04:05-07:00") | replaceRE "(?:T)\\d{2}:\\d{2}:\\d{2}" "T17:30:00" }}
title       = "Third Annual Knight of Distinguished Alumni"
titleAlt    = "Join Us in Celebrating a Knight of Distinguished Alumni"
shortTitle  = "Knight of Distinguished Alumni"
# Remember to adjust eventDate to reflect the appropriate date and time.
eventDate   = "{{ dateFormat "2006-01-02T15:04:05-07:00" $eventDate }}"

categories  = ["alumni","events"]
date        = {{ .Date }}
description = ""
draft       = false
layout      = "dinner-layout"
layout_hero = true
url         = "/alumni-dinner"

[tickets]
  available    = true
  # Remember to change deadline date to appropriate deadline for RSVPs. After this date, the ticket order form will be disabled the next time the site is built.
  deadlineDate = {{ .Date }}
  childAges    = "Ages 4-10"
  childPrice   = "19.00"
  price        = "37.00"
  serviceFee   = "1.15"

[[sections.credits]]
  title   = "Credits"
  [[sections.credits.item]]
  name  = "Mr. First 'Nickname' Last"
  title = "Event Emcee"

  [[sections.credits.item]]
  name  = "Music Over the Decades provided by Mr. Al Bergman, '78"
  title = "Music"

[[sections.recipients]]
  title   = "Our {{ dateFormat "2006" $eventDate }} Distinguished Alumni"
  content = "Since 1952, the Norwin School District has graduated tens of thousands of students, many of whom have gone on to change the world, touching the lives of their fellow man. The NSDCF is proud to honor the following individuals for their outstanding achievements:"

[[sections.schedule]]
  # Remember to change the date and time for each schedule item to reflect the times announced in the printed invitation.
  title   = "Event Schedule"
  [[sections.schedule.item]]
    title = "Cocktails and Cash Bar"
    time  = "{{ $eventDate }}"
  [[sections.schedule.item]
    title = "Buffet Dinner"
    time  = "{{ $eventDate }}"
  [[sections.schedule.item]]
    title   = "Distinguished Alumni Awards and Scholarship Presentations"
    content = "After Dinner"

[[sections.support]]
  title   = "Support the NSDCF"
  content = "The NSDCF will offer a Chinese auction and raffle tickets for attendees wishing to voluntarily support future endeavors of the Association."

[[sections.questions]]
  title   = "Questions"
  content = "Further questions regarding the event may be directed to <FIRST> <LAST> by [email](mailto:alumni@nsdcf.org) or by phone at <PHONE>."

[[sections.venue]]
  title   = "Event Venue"
  name    = "Stratigos Banquet Center"
  street  = "131 Colonial Manor Road"
  city    = "North Huntingdon"
  state   = "Pennsylvania"
  postal  = "15642"

[[resources]]
  name = "mast"
  src  = "files/mast.jpg"

[[resources]]
  src  = "recipients/*.md"
  name = "recipient-:counter"

[[resources]]
  src  = "recipients/*.jpg"
  name = "recipient-photo:counter"

[[resources]]
  name  = "reservation-form"
  src   = "{{ dateFormat "2006" $eventDate }}-alumni-reservations-form.pdf"
  title = "Reservation Form"
  [resources.params]
    icon = "pdf"
+++

You are cordially invited to join the Norwin School District Community Foundation on {{ dateFormat "Monday, January 2, 2006" $eventDate }} for a celebration of Norwin's past, present, and future as we honor the achievements of of some of our most distinguished alumni and graduating students.

Reservations are required for this event at $37.00 per person. [Make yours today]({{< ref "#reservations" >}}).
