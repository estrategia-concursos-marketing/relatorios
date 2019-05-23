SELECT COUNT(b.SubscriberID) as Bounces_Unicos,
       b.JobID
FROM SendsMCReport r
JOIN _bounce b ON r.JobID = b.JobID
WHERE b.EventDate = DATEADD(DAY, -2, GETDATE())
GROUP BY b.JobID