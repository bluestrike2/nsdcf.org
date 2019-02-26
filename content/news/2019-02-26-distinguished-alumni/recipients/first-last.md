+++
title         = "2019 02 26 Distinguished Alumni"
salutation    = ""
# attending - Is a boolean field—meaning its value is either 'true' or 'false' and indicates whether the recipient will be attending this year's event. If false, it is denoted on their profile so as to avoid confusion.
attending     = true
# awardType - Is limited to one of three values: "Alumni" for alumni recipients (default), "Friend" for a non-alumni recipient honored as "Friends of Norwin", or "Scholarship" for the graduating Norwin senior receiving one the Association's annual scholarship.
awardType     = "Alumni"
# field - Is the nominee's field of accomplishment, and should match what is printed in the event program. The field should be surrouned in quote marks (i.e., "Business"), and if more than one is selected, each should be separated by a comma (i.e. "Business", Communications) inside the brackets. The options are limited to: Business, Communications, Education, Fine Arts, Government, Law, Medicine, Military Service, Performing Arts, Philanthropy, Public Service, Science, Technology, Theology.
field         = [""]
# photo - Is a field for the relative path to the recipient's photo. It should always start with "recipients/" and include the ".jpg" file extension, e.g. "recipients/first-last.jpg"
photo         = "recipients/2019 02 26 Distinguished Alumni.jpg"
# yearGraduated - Is the year the recipient graduated from Norwin. For *Friends*, this field may be left empty, i.e. "".
yearGraduated = "1900"

# Copy and paste the 'academicDegrees' table for each degree earned (i.e., bachelor, masters, doctorate, etc.). If none are applicable, delete the table altogether.
#   - For *undergraduate* degrees, 'name' should be the full name of the institution rather than the school or college within that university: e.g., "University of Pittsburgh" rather than "Swanson School of Engineering".
#   - For *graduate* degrees, 'name' may often consist of both of these, e.g. "University of Pittsburgh School of Law" or "Trinity College, Oxford University". In most instances, you can go by the information provided in the recipient's CV.
[[academicDegrees]]
school = "Name of School"
degree = "BA Philosophy"
year   = "1900"
+++

This file represents a brief overview of a recipient's background and story that, together with the front-matter fields above, will be displayed biography. This biography should be clear and succint while managing to convey the reasoning behind their selection as a Distinguished Alumni.

In addition to this file, a JPEG photo of the recipient should be included using the same naming convention as each markdown file: ```first-last.md``` should be accompanied by ```first-last.jpg```. Due to difficulties with the quality of photos provided by previous recipients, prior to the event only smaller thumbnail-sized photos of each recipient will be used. After the event, these photos should be replaced with higher-resolution (minimum of 683x1024) taken at the event; based on the date, the page template will change how the photos are presented to take advantage of the larger size.

Refer to site documentation for additional information regarding Markdown formatting and front-matter.
