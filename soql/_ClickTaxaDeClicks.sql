SELECT COUNT(c.SubscriberID) as Clicks_Unicos,
       c.JobID
FROM SendsMCReport r
JOIN _Click c ON r.JobID = c.JobID
WHERE c.EventDate = DATEADD(DAY, -2, GETDATE())
AND c.IsUnique = 1
GROUP BY c.JobID